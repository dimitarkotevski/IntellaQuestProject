using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.Responses;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.ViewModels;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using Microsoft.IdentityModel.Tokens;
using IntellaQuest.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using IntellaQeust.BusinessLogic.Security;
using System.Runtime.InteropServices;
using FluentNHibernate.Conventions;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQeust.BusinessLogic.Mappers;
using NHibernate.AdoNet;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IUserService
    {
        void Registration(UserRegistrationViewModel registrationModel);
        UserTokenInformation Login(UserLoginViewModel loginModel);
        void UpdatePassword(ChangePasswordUserViewModel model);
        ResponseModel<UserGridModel> GetAll(RequestModel request);
        UserDetailsModel Get(Guid Id);
        bool Create(UserViewModel model);
        void Update(UserViewModel model);
        void Delete(Guid Id);
        double GetAmountMoneyOfUser(Guid userId);
        void AddPayment(Guid userId, PaymentsViewModelInfo model);
        void DeletePayment(Guid userId);
    }
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRoleRepository _roleRepository;
        private readonly IUserRepository _userRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IPaymentRepository _paymentRepository;
        private readonly IProductRepository _productRepository;
        private readonly IShoppingCartRepository _shoppingCartRepository;
        private readonly IShoppingCartDetailRepository _shoppingCartDetailRepository;

        public UserService(
                    IUnitOfWork unitOfWork,
                    IUserRepository userRepository, 
                    IRoleRepository roleRepository,
                    IOrderRepository orderRepository, 
                    IPaymentRepository paymentRepository,
                    IProductRepository productRepository,
                    IShoppingCartRepository shoppingCartRepository,
                    IShoppingCartDetailRepository shoppingCartDetailRepository
            )
        {
            _unitOfWork = unitOfWork;
            _roleRepository = roleRepository;
            _userRepository = userRepository;
            _orderRepository = orderRepository;
            _paymentRepository = paymentRepository;
            _productRepository = productRepository;
            _shoppingCartRepository = shoppingCartRepository;
            _shoppingCartDetailRepository = shoppingCartDetailRepository;
        }
        
        #region User Authentification

        public void Registration(UserRegistrationViewModel model)
        {
            if (_userRepository.CheckExist(x=>x.Username == model.Username))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.USERNAME_ALREADY_EXIST, model.Username));

            if (_userRepository.CheckExist(x => x.Email == model.Email))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.EMAIL_ALREADY_EXIST, model.Email));
            User userEntity;
            using (_unitOfWork.BeginTransaction())
            {
                userEntity = new User
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Username = model.Username,
                    Role = _roleRepository.GetUserRole(),
                    Password =PasswordEncryption.Encryption( model.Password ),
                };
                _userRepository.Add(userEntity);
                _unitOfWork.Commit();
            }
            MakeShoppingCardForTheUser(userEntity);
        }
        public void MakeShoppingCardForTheUser(User model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ShoppingCart shoppingCart = new ShoppingCart
                {
                    User = model,
                    Active = true,
                    ShoppingCartDetails = new List<ShoppingCartDetail>()
                };
                _shoppingCartRepository.Add(shoppingCart);
                _unitOfWork.Commit();
            }
        }
        public UserTokenInformation Login(UserLoginViewModel loginModel)
        {
            /*if (loginModel.Password.IsNullOrEmpty())
                throw new BllException(ShopExceptionMassages.UserExceptionMassages.PASSWORD_IS_REQUIRED);

            if (loginModel.Username.IsNullOrEmpty())
                throw new BllException(ShopExceptionMassages.UserExceptionMassages.USERNAME_IS_REQUIRED);*/

            loginModel.Password = PasswordEncryption.Encryption(loginModel.Password);

            using (_unitOfWork.BeginTransaction())
            {
                if(_userRepository.CheckExist(x=> x.Username.Equals(loginModel.Username) && x.Password.Equals(loginModel.Password)))
                {
                    var user = _userRepository.FindBy(x => x.Username.Equals(loginModel.Username) && x.Password.Equals(loginModel.Password));

                    return new UserTokenInformation
                    {
                        Id = user.Id,
                        Username = user.Username,
                        Role = user.Role.Name,
                        Token = CreateToken(user)
                    };
                }
                throw new BllException(ShopExceptionMassages.UserExceptionMassages.USERNAME_PASSWORD_INCORRECT);
            }
        }
        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, user.Role.Name)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TokenConstant.KEY));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new JwtSecurityToken(
                                        TokenConstant.ISSUER_CUSTOMERs, 
                                        TokenConstant.AUDIENCE_CUSTOMERS, 
                                        claims,
                                        expires: DateTime.Now.AddDays(10), 
                                        signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
        public void UpdatePassword(ChangePasswordUserViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(model.Id)
                    ?? throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);

                var oldPassword = PasswordEncryption.Encryption(model.OldPassword);
                var newPassword = PasswordEncryption.Encryption(model.NewPassword);
                if (user.Password != oldPassword)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.PASSWORD_IS_INCORRECT);
                }
                if (oldPassword == newPassword)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.SAME_OLD_AND_NEW_PASWORD);
                }

                user.Password = newPassword;
                _userRepository.Update(user);
                _unitOfWork.Commit();
            }
        }

        #endregion

        public double GetAmountMoneyOfUser(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId)
                    ?? throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);

                return user.Amount;
            }
        }

        #region Payment
        public void DeletePayment(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId);
                if (user == null)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                }

                var paymentId = user.Payment.Id;
                user.Payment = null;

                var payment = _paymentRepository.FindBy(paymentId);
                if (payment == null)
                {
                    throw new BllException(ShopExceptionMassages.PaymentExceptionMassages.NOT_FOUND);
                }

                _paymentRepository.Delete(payment);

                _userRepository.Update(user);
                _unitOfWork.Commit();
            }
        }

        public void AddPayment(Guid userId, PaymentsViewModelInfo model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId);
                if(user == null)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                }

                if(user.Payment == null)
                {
                    var payment = new Payment
                    {
                        CardHolder = model.CardHolder,
                        CardNumber = model.CardNumber,
                        ExpirationDate = model.ExpirationDate,
                        SecurityCode = model.SecurityCode,
                    };

                    user.Payment = payment;

                    _paymentRepository.Add(payment);
                    _userRepository.Update(user);

                    _unitOfWork.Commit();
                }
            }
        }

        #endregion

        #region ADMIN 

        public ResponseModel<UserGridModel> GetAll(RequestModel request)
        {
            return FilterAndPage(request);
        }
        private ResponseModel<UserGridModel> FilterAndPage(RequestModel request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ResponseModel<UserGridModel> response = new ResponseModel<UserGridModel>();
                IQueryable<User> listUsersForFiltering = _userRepository.All();

                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    listUsersForFiltering = listUsersForFiltering
                        .Where(x => (
                            x.FirstName.Contains(request.SearchString) ||
                            x.LastName.Contains(request.SearchString)) ||
                            (x.LastName + " " + x.FirstName).Equals(request.SearchString) 
                            || x.Email.Contains(request.SearchString) 
                            || x.Username.Contains(request.SearchString));
                }
                if (!string.IsNullOrEmpty(request.EmailEnding))
                {
                    listUsersForFiltering = listUsersForFiltering.Where(x => x.FirstName.EndsWith(request.EmailEnding));
                }


                switch (request.SortName)
                {
                    case "FirstName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderBy(x => x.FirstName);
                        }
                        else
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderByDescending(x => x.FirstName);
                        }
                        break;
                    case "LastName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderBy(x => x.LastName);
                        }
                        else
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderByDescending(x => x.LastName);
                        }
                        break;
                    case "Email":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderBy(x => x.Email);
                        }
                        else
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderByDescending(x => x.Email);
                        }
                        break;
                    case "Username":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderBy(x => x.Username);
                        }
                        else
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderByDescending(x => x.Username);
                        }
                        break;
                    case "NumberOfOrders":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderBy(x => x.Orders.Count());
                        }
                        else
                        {
                            listUsersForFiltering = listUsersForFiltering.OrderByDescending(x => x.Orders.Count());
                        }
                        break;
                    default:
                        break;
                }
                if (request.Size == 0 && request.PageNeeded == 0)
                {
                    request.PageNeeded = 1;
                    request.Size = listUsersForFiltering.Count();
                }

                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = listUsersForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToGridModel()).ToList();
                response.TotalItems = listUsersForFiltering.Count();

                _unitOfWork.Commit();
                return response;
            }
        }
        public bool Create(UserViewModel model)
        {
            if (_userRepository.CheckExist(x => x.Email == model.Email))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.EMAIL_ALREADY_EXIST, model.Email));
            
            if (_userRepository.CheckExist(x => x.Username == model.Username))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.USERNAME_ALREADY_EXIST, model.Username));

            Role role=null;
            if(model.Role!= null)
            {
                if(model.Role == "admin")
                {
                    role = _roleRepository.GetAdminRole();
                }
                else
                {
                    role = _roleRepository.GetUserRole();
                }
            }

            using (_unitOfWork.BeginTransaction())
            {
                var userEntity = new User
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Username = model.Username,
                    Password = PasswordEncryption.Encryption(model.Password),
                    Role = role != null ? role : _roleRepository.GetUserRole(),
                    FavouriteProducts = null,
                    Orders = null,
                    Payment = null
                };
                _userRepository.Add(userEntity);
                _unitOfWork.Commit();
                return true;
            }
        }
        public void Delete(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _userRepository.Delete(Id);
                _unitOfWork.Commit();
            }
        }
        public UserDetailsModel Get(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId);
                if (user == null)
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);

                return user.MapToUserDetailModel();
            }
        }
        public void Update(UserViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(model.Id);
                if (user == null)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                };

                user.LastName = model.LastName;
                user.FirstName = model.FirstName;
                user.Username = model.Username;
                user.Email = model.Email;

                user.Address = model.Address;
                user.City = model.City;
                user.State = model.State;
                user.ZipCode = model.ZipCode;

                if(model.Password != null)
                {
                    user.Password = PasswordEncryption.Encryption(model.Password);
                }

                if(model.Role != null)
                {
                    if(model.Role == "admin")
                    {
                        user.Role = _roleRepository.GetAdminRole();
                    }
                    else
                    {
                        user.Role = _roleRepository.GetUserRole();
                    }
                }

                _userRepository.Update(user);
                _unitOfWork.Commit();
            }
        }

        //public void SetUserDetails(UserDetailsModel model)
        //{
        //    using (_unitOfWork.BeginTransaction())
        //    {
        //        var user = 
        //    }
        //}

        //public void UpdatePassword(Guid userId,string oldPassword, string newPassword)
        //{
        //    using (_unitOfWork.BeginTransaction())
        //    {
        //        var user = _userRepository.FindBy(userId);
        //        if (user == null)
        //        {
        //            throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
        //        };


        //        var oldP = PasswordEncryption.Encryption(oldPassword);
        //        var newP = PasswordEncryption.Encryption(newPassword);

        //        if(oldP != user.Password)
        //        {
        //            throw new BllException(ShopExceptionMassages.UserExceptionMassages.PASSWORD_IS_INCORRECT);
        //        }

        //        if (oldP == newP)
        //        {
        //            throw new BllException(ShopExceptionMassages.UserExceptionMassages.SAME_OLD_AND_NEW_PASWORD);
        //        }

        //        user.Password = newP;

        //        _userRepository.Update(user);
        //        _unitOfWork.Commit();
        //    }
        //}

        #endregion

    }
}

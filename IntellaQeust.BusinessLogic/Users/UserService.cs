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

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IUserService
    {
        void Registration(UserRegistrationViewModel registrationModel);
        string Login(UserLoginViewModel loginModel);
        ResponseModel<UserViewModel> GetAll(RequestModel request);
        UserViewModel Get(Guid Id);
        bool Create(UserViewModel model);
        void Update(UserViewModel model);
        void Delete(Guid Id);

    }
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUserRepository userRepository, 
                            IOrderRepository orderRepository, 
                            IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
        }
        public void Registration(UserRegistrationViewModel model)
        {
            if (_userRepository.CheckExist(x=>x.Username == model.Username))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.USERNAME_ALREADY_EXIST, model.Username));

            if (_userRepository.CheckExist(x => x.Email == model.Email))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.EMAIL_ALREADY_EXIST, model.Email));

            using (_unitOfWork.BeginTransaction())
            {
                var userEntity = new User
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Username = model.Username,
                    Password =PasswordEncryption.Encryption( model.Password ),
                };
                _userRepository.Add(userEntity);
                _unitOfWork.Commit();
            }
        }
        public string Login(UserLoginViewModel loginModel)
        {
            loginModel.Password = PasswordEncryption.Encryption(loginModel.Password);

            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(x=>x.Username == loginModel.Username && x.Password == loginModel.Password);
                if(user == null)
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);

                return CreateToken(user);
            }
        }
        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString())
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

        public bool Create(UserViewModel model)
        {
            if (_userRepository.CheckExist(x => x.Email == model.Email))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.EMAIL_ALREADY_EXIST, model.Email));
            
            if (_userRepository.CheckExist(x => x.Username == model.Username))
                throw new BllException(string.Format(ShopExceptionMassages.UserExceptionMassages.USERNAME_ALREADY_EXIST, model.Username));
            
            using (_unitOfWork.BeginTransaction())
            {
                var userEntity = new User
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Username = model.Username,
                    Password = model.Password,
                };
                _userRepository.Add(userEntity);
                _unitOfWork.Commit();
                return true;
            }
        }

        public void Delete(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _userRepository.Delete(userId);
                _unitOfWork.Commit();
            }
        }

        public UserViewModel Get(Guid userId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var user = _userRepository.FindBy(userId);
                if (user == null)
                {
                    throw new BllException(ShopExceptionMassages.UserExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();
                return user.MapToViewModel();

            }
        }

        public ResponseModel<UserViewModel> GetAll(RequestModel request)
        {
            return FilterAndPage(request);
        }
        private ResponseModel<UserViewModel> FilterAndPage(RequestModel request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ResponseModel<UserViewModel> response = new ResponseModel<UserViewModel>();
                IQueryable<User> listUsersForFiltering = _userRepository.All();

                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    listUsersForFiltering = listUsersForFiltering
                        .Where(x => (
                            x.FirstName.Contains(request.SearchString) || 
                            x.LastName.Contains(request.SearchString)) || 
                            (x.LastName +" "+x.FirstName).Equals(request.SearchString));
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
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = listUsersForFiltering.Count();

                _unitOfWork.Commit();
                return response;
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
                user.Email = model.Email;
                user.Password = model.Password;
                _userRepository.Update(user);
                _unitOfWork.Commit();
            }
        }
    }
}

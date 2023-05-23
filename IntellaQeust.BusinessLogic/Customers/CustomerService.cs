using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.Responses;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.ViewModels;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using IntellaQuest.Repository.Repositories;
using System;
using System.Linq;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface ICustomerService
    {
        ResponseModel<CustomerViewModel> GetAll(RequestModel request);
        CustomerViewModel Get(Guid Id);
        bool Create(CustomerViewModel model);
        void Update(CustomerViewModel model);
        void Delete(Guid Id);

    }
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CustomerService(ICustomerRepository customerRepository, 
                            IOrderRepository orderRepository, 
                            IUnitOfWork unitOfWork)
        {
            _customerRepository = customerRepository;
            _orderRepository = orderRepository;
            _unitOfWork = unitOfWork;
        }


        public bool Create(CustomerViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                if (_customerRepository.CheckExist(x=>x.Email==model.Email))
                {
                    throw new BllException(string.Format(ShopExceptionMassages.CustomerExceptionMassages.EMAIL_ALREADY_EXIST,model.Email));
                }
                if(_customerRepository.CheckExist(x => x.Username == model.Username))
                {
                    throw new BllException(string.Format(ShopExceptionMassages.CustomerExceptionMassages.USERNAME_ALREADY_EXIST, model.Username));
                }
                var customerEntity = new Customer
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Username = model.Username,
                    Password = model.Password,
                };
                _customerRepository.Add(customerEntity);
                _unitOfWork.Commit();
                return true;
            }
        }

        public void Delete(Guid customerId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _customerRepository.Delete(customerId);
                _unitOfWork.Commit();
            }
        }

        public CustomerViewModel Get(Guid customerId)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var customer = _customerRepository.FindBy(customerId);
                if (customer == null)
                {
                    throw new BllException(ShopExceptionMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();
                return customer.MapToViewModel();

            }
        }

        public ResponseModel<CustomerViewModel> GetAll(RequestModel request)
        {
            return FilterAndPage(request);
        }
        private ResponseModel<CustomerViewModel> FilterAndPage(RequestModel request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ResponseModel<CustomerViewModel> response = new ResponseModel<CustomerViewModel>();
                IQueryable<Customer> listCustomersForFiltering = _customerRepository.All();

                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    listCustomersForFiltering = listCustomersForFiltering
                        .Where(x => (
                            x.FirstName.Contains(request.SearchString) || 
                            x.LastName.Contains(request.SearchString)) || 
                            (x.LastName +" "+x.FirstName).Equals(request.SearchString));
                }
                if (!string.IsNullOrEmpty(request.EmailEnding))
                {
                    listCustomersForFiltering = listCustomersForFiltering.Where(x => x.FirstName.EndsWith(request.EmailEnding));
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
                            listCustomersForFiltering = listCustomersForFiltering.OrderBy(x => x.FirstName);
                        }
                        else
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderByDescending(x => x.FirstName);
                        }
                        break;
                    case "LastName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderBy(x => x.LastName);
                        }
                        else
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderByDescending(x => x.LastName);
                        }
                        break;
                    case "Email":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderBy(x => x.Email);
                        }
                        else
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderByDescending(x => x.Email);
                        }
                        break;
                    case "Username":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderBy(x => x.Username);
                        }
                        else
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderByDescending(x => x.Username);
                        }
                        break;
                    case "NumberOfOrders":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderBy(x => x.Orders.Count());
                        }
                        else
                        {
                            listCustomersForFiltering = listCustomersForFiltering.OrderByDescending(x => x.Orders.Count());
                        }
                        break;
                    default:
                        break;
                }
                if (request.Size == 0 && request.PageNeeded == 0)
                {
                    request.PageNeeded = 1;
                    request.Size = listCustomersForFiltering.Count();
                }

                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = listCustomersForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = listCustomersForFiltering.Count();

                _unitOfWork.Commit();
                return response;
            }
        }

        public void Update(CustomerViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var customer = _customerRepository.FindBy(model.Id);
                if (customer == null)
                {
                    throw new BllException(ShopExceptionMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                };
                customer.LastName = model.LastName;
                customer.FirstName = model.FirstName;
                customer.Email = model.Email;
                customer.Password = model.Password;
                _customerRepository.Update(customer);
                _unitOfWork.Commit();
            }
        }
    }
}

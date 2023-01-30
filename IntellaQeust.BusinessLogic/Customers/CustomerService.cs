using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using IntellaQuest.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Services
{
    public interface ICustomerService
    {
        List<CustomerViewModel> GetAll();
        CustomerViewModel Get(Guid customerId);
        Guid Create(CustomerViewModel model);
        void Update(CustomerViewModel model);
        void Delete(Guid customerId);

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


        public Guid Create(CustomerViewModel model)
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
                    Name = model.Name,
                    Surname = model.Surname,
                    Email = model.Email,
                    Username = model.Username,
                    Password = model.Password,
                };
                _customerRepository.Add(customerEntity);
                _unitOfWork.Commit();
                return customerEntity.Id;
            }
        }

        /*public void Delete(CustomerViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var entity = new Customer
                {
                    Id = model.Id,
                    Name = model.Name,
                    Surname = model.Surname,
                    Email = model.Email,
                    Username = model.Username,
                    Password = model.Password,
                };
                _customerRepository.Delete(entity);
                _unitOfWork.Commit();
            }
        }*/

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
                    throw new BllException(String.Format(ShopExceptionMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION));
                }
                _unitOfWork.Commit();
                return CustomersMappers.MapToViewModel(customer);

            }
        }

        public List<CustomerViewModel> GetAll()
        {
            using (_unitOfWork.BeginTransaction())
            {
                var result = _customerRepository.All()
                    .Select(x => CustomersMappers.MapToViewModel(x))
                    .ToList();
                _unitOfWork.Commit();
                return result;
            }
        }

        public void Update(CustomerViewModel model)
        {
            
            using (_unitOfWork.BeginTransaction())
            {
                var customer = _customerRepository.FindBy(model.Id);
                if (customer == null)
                {
                    throw new BllException(
                                ShopExceptionMassages
                                    .CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                };
                customer.Surname = model.Surname;
                customer.Name = model.Name;
                customer.Email = model.Email;
                customer.Password = model.Password;
                _customerRepository.Update(customer);
                _unitOfWork.Commit();
            }
        }
    }
}

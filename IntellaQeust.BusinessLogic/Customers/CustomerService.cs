using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
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
        bool CheckEmailExists(CustomerViewModel model);
        bool CheckUsernameExists(CustomerViewModel model);
    }
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        //private readonly IOrderRepository _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CustomerService(ICustomerRepository customerRepository, IUnitOfWork unitOfWork)
        {
            _customerRepository = customerRepository;
            _unitOfWork = unitOfWork;
        }

        public bool CheckEmailExists(CustomerViewModel model)
        {
            throw new NotImplementedException();
        }

        public bool CheckUsernameExists(CustomerViewModel model)
        {
            throw new NotImplementedException();
        }

        public Guid Create(CustomerViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
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
                _customerRepository.Update(model.MapToModel());
                var entity = new Customer
                {
                    Id = model.Id,
                    Name = model.Name,
                    Surname = model.Surname,
                    Email = model.Email,
                    Username = model.Username,
                    Password = model.Password
                };
                _customerRepository.Update(entity);
                _unitOfWork.Commit();
            }
        }
    }
}

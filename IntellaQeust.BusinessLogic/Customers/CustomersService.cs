using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Domain;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Services
{
    public interface ICustomersService
    {
        CustomerViewModel Get(Guid customerId);
        List<CustomerViewModel> GetAll();
        Guid Create(CustomerViewModel model);
        void Update(CustomerViewModel model);
        void Delete(Guid customerId);
        void Delete(CustomerViewModel model);
        bool CheckEmailExists(CustomerViewModel model);
        bool CheckUsernameExists(CustomerViewModel model);
    }
    public class CustomersService : ICustomersService
    {
        private readonly ICustomersRepository _customerRepository;
        //private readonly IOrderRepository _orderRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CustomersService(ICustomersRepository customerRepository, IUnitOfWork unitOfWork)
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
                var customerEntity = new Customers
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

        public void Delete(CustomerViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var entity = new Customers
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
                var customer = _customerRepository.FindBy(customerId) 
                    ?? throw new CustomerNotFoundException(String.Format(CustomersExceptionMassage._customerIdException, customerId));
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
            Get(model.Id);
            using (_unitOfWork.BeginTransaction())
            {
                /*var entity = Get(model.Id);
                entity.Id = model.Id;
                entity.Name = model.Name;
                entity.Email = model.Email;
                entity.Username = model.Username;
                entity.Password = model.Password;
                Customers result = entity.MapToModel();*/
                
                var entity = new Customers
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

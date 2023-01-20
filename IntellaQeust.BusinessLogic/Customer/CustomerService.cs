using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Domain;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;
using NHibernate.Linq;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Services
{
    public interface ICustomerService
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
            _unitOfWork.BeginTransaction();
            var customerEntity = new Customer { 
                Name = model.Name ,
                Surname= model.Surname ,
                Email= model.Email ,
                Username= model.Username ,
                Password= model.Password ,
            };
            _customerRepository.Add(customerEntity);
            _unitOfWork.Commit();
            return customerEntity.Id;
        }

        /*public void Delete(Guid customerId)
        {
            _unitOfWork.BeginTransaction();
            _customerRepository.Delete(customerId);
            _unitOfWork.Commit();
        }*/

        public void Delete(CustomerViewModel model)
        {
            _unitOfWork.BeginTransaction();
            var entity = new Customer
            {
                Id= model.Id ,
                Name= model.Name ,
                Surname= model.Surname ,
                Email= model.Email ,
                Username= model.Username ,
                Password= model.Password ,
            };
            _customerRepository.Delete(entity);
            _unitOfWork.Commit();
        }

        public void Delete(Guid customerId)
        {
            _unitOfWork.BeginTransaction();
            bool flag=_customerRepository.Delete(customerId);
            _unitOfWork.Commit();
        }

        public CustomerViewModel Get(Guid customerId)
        {
            _unitOfWork.BeginTransaction();
            var customer = _customerRepository.FindBy(customerId);
            _unitOfWork.Commit();
            return CustomerMappers.MapToViewModel(customer);
        }

        public List<CustomerViewModel> GetAll()
        {

            _unitOfWork.BeginTransaction();
            var result = _customerRepository.All()
                .Select(x => CustomerMappers.MapToViewModel(x))
                .ToList();
            _unitOfWork.Commit();
            return result;
        }

        public void Update(CustomerViewModel model)
        {
            _unitOfWork.BeginTransaction();
            var entity = new Customer {
                Id= model.Id ,
                Name = model.Name ,
                Surname= model.Surname ,
                Email= model.Email ,
                Username= model.Username ,
                Password= model.Password ,
            };
            _customerRepository.Update(entity);
            _unitOfWork.Commit();
        }
    }
}

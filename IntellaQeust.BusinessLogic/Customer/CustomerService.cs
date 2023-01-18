using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Services
{
    public interface ICustomerService
    {
        /*CustomerViewModel Get(Guid customerId);*/
        List<CustomerViewModel> GetAll();
        /*Guid Create(CustomerViewModel model);
        void Update(CustomerViewModel model);
        void Delete(Guid customerId);
        bool CheckEmailExists(CustomerViewModel model);
        bool CheckUsernameExists(CustomerViewModel model);*/
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


        public List<CustomerViewModel> GetAll()
        {

            _unitOfWork.BeginTransaction();
            var result = _customerRepository.All()
                .Select(x => CustomerMappers.MapToViewModel(x))
                .ToList();
            _unitOfWork.Commit();
            return result;
        }

    }
}

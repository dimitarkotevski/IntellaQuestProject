using IntellaQuest.Repository.Repositories;
using NHibernate.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQeust.BusinessLogic.Customer
{
    public interface ICustomerService
    {
        CustomerViewModel Get(Guid customerId);
        List<CustomerViewModel> GetAll();
        Guid Create(CustomerViewModel model);
        void Update(CustomerViewModel model);
        void Delete(Guid customerId);
        bool CheckEmailExists(CustomerViewModel model);
        bool CheckUsernameExists(CustomerViewModel model);
    }
    public class CustomerService : ICustomerService
    {
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
            throw new NotImplementedException();
        }

        public void Delete(Guid customerId)
        {
            throw new NotImplementedException();
        }

        public CustomerViewModel Get(Guid customerId)
        {
            throw new NotImplementedException();
        }

        public List<CustomerViewModel> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(CustomerViewModel model)
        {
            throw new NotImplementedException();
        }
    }
}

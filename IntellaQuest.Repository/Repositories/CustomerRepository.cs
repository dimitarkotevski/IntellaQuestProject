using IntellaQuest.Domain;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Repository.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {

    }
    public class CustomerRepository : Repository<Customer>,ICustomerRepository 
    {
        public CustomerRepository(ISession session) : base(session)
        {
        }
    }
}

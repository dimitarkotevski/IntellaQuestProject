using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        bool CheckExist(Expression<Func<Customer, bool>> expression);
    }
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public bool CheckExist(Expression<Func<Customer, bool>> expression)
        {
            return All().Where(expression).Any();
        }
    }
}

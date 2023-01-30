using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System.Linq.Expressions;
using System.Linq;
using System;

namespace IntellaQuest.Repository.Repositories
{
    public interface IOrderRepository : IRepository<Order>
    {
        bool CheckExist(Expression<Func<Order, bool>> expression);
    }
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
        public bool CheckExist(Expression<Func<Order, bool>> expression)
        {
            return All().Where(expression).Any();
        }
    }
}

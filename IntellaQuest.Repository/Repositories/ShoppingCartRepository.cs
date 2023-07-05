

using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IShoppingCartRepository : IRepository<ShoppingCart>
    {
    }
    public class ShoppingCartRepository : Repository<ShoppingCart>, IShoppingCartRepository
    {
        public ShoppingCartRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

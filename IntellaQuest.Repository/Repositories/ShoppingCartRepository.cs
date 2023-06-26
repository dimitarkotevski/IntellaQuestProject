

using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IShoppingCartRepository : IRepository<ShoppingCart>
    {
        IQueryable<ShoppingCart> GetUserCartProducts(User user);
    }
    public class ShoppingCartRepository : Repository<ShoppingCart>, IShoppingCartRepository
    {
        public ShoppingCartRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public IQueryable<ShoppingCart> GetUserCartProducts(User user)
        {
            return All().Where(x=>x.User == user);
        }
    }
}

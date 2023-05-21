
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IShoppingCartProductRepository : IRepository<ShoppingCartProduct>
    {

    }
    public class ShoppingCartProductRepository : Repository<ShoppingCartProduct>, IShoppingCartProductRepository
    {
        public ShoppingCartProductRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

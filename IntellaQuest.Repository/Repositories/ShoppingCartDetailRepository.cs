using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Repositories
{
    public interface IShoppingCartDetailRepository : IRepository<ShoppingCartDetail>
    {

    }
    public class ShoppingCartDetailRepository : Repository<ShoppingCartDetail> , IShoppingCartDetailRepository
    {
        public ShoppingCartDetailRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

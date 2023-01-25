using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Repositories
{
    public interface IProductsRepository : IRepository<Products>
    {

    }
    public class ProductsRepository : Repository<Products>, IProductsRepository
    {
        public ProductsRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

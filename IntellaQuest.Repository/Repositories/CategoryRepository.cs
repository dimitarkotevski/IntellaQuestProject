using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface ICategoryRepository : IRepository<Category>
    {
        IQueryable<Product> GetProductsByCategory(Category category);
    }
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public IQueryable<Product> GetProductsByCategory(Category category)
        {
            return All().Where(x => x == category).SelectMany(y=>y.Products);
        }
    }
}

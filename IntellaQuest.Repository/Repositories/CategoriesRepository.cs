using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Repositories
{
    public interface ICategoriesRepository : IRepository<Categories>
    {

    }
    public class CategoriesRepository : Repository<Categories>, ICategoriesRepository
    {
        public CategoriesRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

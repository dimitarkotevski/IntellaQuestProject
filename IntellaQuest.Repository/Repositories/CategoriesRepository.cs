using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Repositories
{
    public interface ICategoriesRepository : IRepository<Categories>
    {

    }
    public class CategoriesRepository : Repository<Categories>, ICategoriesRepository
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoriesRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
    }
}

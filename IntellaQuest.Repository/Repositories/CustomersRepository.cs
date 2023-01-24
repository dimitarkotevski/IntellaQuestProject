using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Repositories
{
    public interface ICustomersRepository : IRepository<Customers>
    {

    }
    public class CustomersRepository : Repository<Customers>,ICustomersRepository 
    {
        private readonly IUnitOfWork _unitOfWork;

        public CustomersRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
    }
}

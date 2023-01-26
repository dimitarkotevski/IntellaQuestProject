using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Repositories
{
    public interface ICustomersRepository : IRepository<Customers>
    {

    }
    public class CustomersRepository : Repository<Customers>,ICustomersRepository 
    {
        public CustomersRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

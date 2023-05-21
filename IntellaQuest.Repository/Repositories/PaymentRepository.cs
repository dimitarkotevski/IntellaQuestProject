using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IPaymentRepository : IRepository<Payment>
    {

    }
    public class PaymentRepository : Repository<Payment>, IPaymentRepository
    {
        public PaymentRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

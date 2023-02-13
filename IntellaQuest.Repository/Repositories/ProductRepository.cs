using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System.Linq.Expressions;
using System.Linq;
using System;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
    }
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

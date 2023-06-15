using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Repository.Repositories
{
    public interface IFavouriteProductsRepository : IRepository<FavouriteProducts>
    {
    }
    public class FavouriteProductsRepository : Repository<FavouriteProducts>, IFavouriteProductsRepository
    {
        public FavouriteProductsRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}

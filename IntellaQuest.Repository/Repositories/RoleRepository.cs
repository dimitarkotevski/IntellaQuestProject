using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IRoleRepository : IRepository<Role>
    {
        Role GetAdminRole();
        Role GetUserRole();
    }
    public class RoleRepository : Repository<Role>, IRoleRepository
    {
        public RoleRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public Role GetAdminRole()
        {
            return All().Where(x => x.Name.ToLower().Contains("admin")).FirstOrDefault();
        }

        public Role GetUserRole()
        {
            return All().Where(x => x.Name.ToLower().Contains("user")).FirstOrDefault();
        }
    }
}

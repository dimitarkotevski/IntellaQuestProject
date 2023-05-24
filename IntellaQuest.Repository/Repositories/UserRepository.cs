﻿using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQuest.Data.NHibernate.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
    }
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

    }
}

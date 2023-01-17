﻿using IntellaQuest.Domain;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Repository.Repositories
{
    public interface ICategoryRepository : IRepository<Category>
    {

    }
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(ISession session) : base(session)
        {
        }
    }
}

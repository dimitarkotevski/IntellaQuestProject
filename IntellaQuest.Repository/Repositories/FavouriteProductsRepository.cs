﻿using IntellaQuest.Data.NHibernate.ConfigurationRepository;
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
        IQueryable<FavouriteProducts> GetUserFavouriteProducts(User userId);
    }
    public class FavouriteProductsRepository : Repository<FavouriteProducts>, IFavouriteProductsRepository
    {
        public FavouriteProductsRepository(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public IQueryable<FavouriteProducts> GetUserFavouriteProducts(User user)
        {
            return All().Where(x=>x.User == user).AsQueryable();
        }
    }
}

using IntellaQuest.Repository.Repositories;
using System.Collections.Generic;
using System;
using IntellaQeust.BusinessLogic.Models;
using IntellaQuest.Repository;
using System.Linq;
using IntellaQeust.BusinessLogic.Mappers;

namespace IntellaQeust.BusinessLogic.Service
{
    public interface IProductsService
    {
        List<ProductsViewModel> GetAll();
        /*ProductsViewModel Get(Guid Id);
        Guid Create(ProductsViewModel model);
        void Update(ProductsViewModel model);
        void Delete(Guid Id);
        void Delete(ProductsViewModel model);
        bool CheckEmailExists(ProductsViewModel model);
        bool CheckUsernameExists(ProductsViewModel model);*/
    }
    public class ProductsService : IProductsService
    {
        private readonly IProductsRepository _productsRepository;
        private readonly UnitOfWork _unitOfWork;

        public ProductsService(IProductsRepository productsRepository, UnitOfWork unitOfWork)
        {
            _productsRepository = productsRepository;
            _unitOfWork = unitOfWork;
        }

        public List<ProductsViewModel> GetAll()
        {
            using(_unitOfWork.BeginTransaction())
            {
                var result = _productsRepository.All().Select(x => ProductsMappers.MapToViewModel(x)).ToList();
                _unitOfWork.Commit();
                return result;
            }
        }
    }
}

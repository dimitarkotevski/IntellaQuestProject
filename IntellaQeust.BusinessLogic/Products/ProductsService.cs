using System.Collections.Generic;
using IntellaQeust.BusinessLogic.Models;
using System.Linq;
using IntellaQeust.BusinessLogic.Mappers;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;

namespace IntellaQuest.BusinessLogic.Services
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
        private readonly IUnitOfWork _unitOfWork;

        public ProductsService(IProductsRepository productsRepository, IUnitOfWork unitOfWork)
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

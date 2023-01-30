using System.Collections.Generic;
using IntellaQeust.BusinessLogic.Models;
using System.Linq;
using IntellaQeust.BusinessLogic.Mappers;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using System;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.Domain;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IProductService
    {
        List<ProductViewModel> GetAll();
        ProductViewModel Get(Guid Id);
        Guid Create(ProductViewModel model);
        void Update(ProductViewModel model);
        void Delete(Guid Id);
        bool CheckNameExists(string Name);
    }
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productsRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IProductRepository productsRepository, ICategoryRepository categoryRepository, IUnitOfWork unitOfWork)
        {
            _productsRepository = productsRepository;
            _categoryRepository = categoryRepository;
            _unitOfWork = unitOfWork;
        }

        public bool CheckNameExists(string Name)
        {
            return _productsRepository.CheckExist(x => x.Name == Name);
        }

        public Guid Create(ProductViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                // Need exception for model.Id 
                if (_productsRepository.CheckExist(x=>x.Name==model.Name))
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NAME_ALREADY_EXIST_EXCEPTION);
                }
                var category = _categoryRepository.FindBy(model.Category.Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var entity = new Product
                {
                    Name = model.Name,
                    Description = model.Description,
                    Category = category,
                };

                _productsRepository.Add(entity);
                _unitOfWork.Commit();

                return entity.Id;
            }
        }

        public void Delete(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                //delete exception need
                var productEntity = _productsRepository.FindBy(Id);
                if (productEntity == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _productsRepository.Delete(productEntity);
                _unitOfWork.Commit();
            }
        }
        public ProductViewModel Get(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var productEntity = _productsRepository.FindBy(Id);
                if (productEntity == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();

                return productEntity.MapToViewModel();
            }
        }

        public List<ProductViewModel> GetAll()
        {
            using (_unitOfWork.BeginTransaction())
            {
                var result = _productsRepository.All().Select(x => ProductsMappers.MapToViewModel(x)).ToList();
                _unitOfWork.Commit();

                return result;
            }
        }

        public void Update(ProductViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(model.Category.Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var product = _productsRepository.FindBy(model.Id);

                if (product == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                //exception need
                product.Name = model.Name;
                product.Description = model.Description;
                product.Category = category;
                _productsRepository.Update(product);
                _unitOfWork.Commit();
            }
        }
    }
}

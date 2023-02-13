using IntellaQeust.BusinessLogic.Models;
using System.Linq;
using IntellaQeust.BusinessLogic.Mappers;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using System;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.Domain;
using IntellaQeust.BusinessLogic.Responses;
using IntellaQeust.BusinessLogic.Requests;
using System.Collections.Generic;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IProductService
    {
        ProductResponse GetAll(ProductRequest request);
        ProductViewModel Get(Guid Id);
        Guid Create(ProductViewModel model);
        void Update(ProductViewModel model);
        void Delete(Guid Id);
        bool CheckNameExists(string Name);
        ProductResponse FilterAndPage(ProductRequest request);
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
                if (_productsRepository.CheckExist(x => x.Name == model.Name))
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
                var productEntity = _productsRepository.FindBy(Id);
                if (productEntity == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _productsRepository.Delete(productEntity);
                _unitOfWork.Commit();
            }
        }

        public ProductResponse FilterAndPage(ProductRequest request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ProductResponse response = new ProductResponse();
                IQueryable<Product> listProductViewForFiltering = _productsRepository.All();
                
                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    listProductViewForFiltering = listProductViewForFiltering.Where(x => x.Name.Contains(request.SearchString));
                }
                if (request.CategoryId!=Guid.Empty)
                {
                    var category = _categoryRepository.FindBy(request.CategoryId);
                    if (category == null)
                    {
                        throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                    }
                    listProductViewForFiltering = listProductViewForFiltering.Where(x => x.Category == category);
                }

                switch (request.SortName)
                {
                    case "Name":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listProductViewForFiltering = listProductViewForFiltering.OrderBy(x => x.Name);
                        }
                        else
                        {
                            listProductViewForFiltering = listProductViewForFiltering.OrderByDescending(x => x.Name);
                        }
                        break;
                    case "Category":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listProductViewForFiltering = listProductViewForFiltering.OrderBy(x => x.Category);
                        }
                        else
                        {
                            listProductViewForFiltering = listProductViewForFiltering.OrderByDescending(x => x.Category);
                        }
                        break;
                    default:
                        break;
                }

                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = listProductViewForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x=>x.MapToViewModel()).ToList();
                response.TotalItems = listProductViewForFiltering.Count();


                _unitOfWork.Commit();

                return response;
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

        public ProductResponse GetAll(ProductRequest request)
        {
            return FilterAndPage(request);
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

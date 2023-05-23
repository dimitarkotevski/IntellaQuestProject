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
using IntellaQeust.BusinessLogic.ViewModels;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IProductService
    {
        ResponseModel<ProductViewModel> GetAll(RequestModel request);
        ProductViewModel Get(Guid Id);
        bool Create(ProductViewModel model);
        bool Update(ProductViewModel model);
        bool Delete(Guid Id);
        bool CheckNameExists(string Name);
        List<ProductViewModel> GetAllTable();
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

        public bool Create(ProductViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
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

                return true;
            }
        }

        public bool Delete(Guid Id)
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
                return true;
            }
        }

        private ResponseModel<ProductViewModel> FilterAndPage(RequestModel request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ResponseModel<ProductViewModel> response = new ResponseModel<ProductViewModel>();
                IQueryable<Product> listProductForFiltering = _productsRepository.All();

                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    listProductForFiltering = listProductForFiltering.Where(x => x.Name.Contains(request.SearchString));
                }
                if (request.EntityId.HasValue)
                {
                    var category = _categoryRepository.FindBy(request.EntityId.Value);
                    if (category == null)
                    {
                        throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                    }
                    listProductForFiltering = listProductForFiltering.Where(x => x.Category == category);
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
                            listProductForFiltering = listProductForFiltering.OrderBy(x => x.Name);
                        }
                        else
                        {
                            listProductForFiltering = listProductForFiltering.OrderByDescending(x => x.Name);
                        }
                        break;
                    case "Category":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listProductForFiltering = listProductForFiltering.OrderBy(x => x.Category);
                        }
                        else
                        {
                            listProductForFiltering = listProductForFiltering.OrderByDescending(x => x.Category);
                        }
                        break;
                    default:
                        break;
                }
                if (request.Size == 0 && request.PageNeeded == 0)
                {
                    request.PageNeeded = 1;
                    request.Size = listProductForFiltering.Count();
                }
                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = listProductForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = listProductForFiltering.Count();


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

        public ResponseModel<ProductViewModel> GetAll(RequestModel request)
        {   
            return FilterAndPage(request);
        }

        public bool Update(ProductViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(model.Category.Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var product = _productsRepository.FindBy(model.Id.Value);

                if (product == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                if (_productsRepository.CheckExist(x => x.Id != model.Id && x.Name == model.Name))
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NAME_ALREADY_EXIST_EXCEPTION);
                }

                //exception need
                product.Name = model.Name;
                product.Description = model.Description;
                product.Category = category;
                _productsRepository.Update(product);
                _unitOfWork.Commit();

                return true;
            }
        }

        public List<ProductViewModel> GetAllTable()
        {
            using(_unitOfWork.BeginTransaction())
            {
                return _productsRepository.All().Select(x=>x.MapToViewModel()).ToList();
            }
        }
    }
}

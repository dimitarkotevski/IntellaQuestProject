using IntellaQeust.BusinessLogic.CategoryModel;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.Responses;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using NHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.Business.Services
{
    public interface ICategoryService
    {
        CategoryViewModel Get(Guid Id);
        CategoryResponse GetAll(CategoryRequest request);
        List<CategoryViewModel> GetAll();
        bool Create(CategoryViewModel model);
        bool Update(CategoryViewModel model);
        void DeleteById(Guid Id);
        bool CheckCategoryNameExists(String Name);
        bool CheckCategoryStatus(bool status);
        CategoryResponse FilterAndPage(CategoryRequest request);
    }

    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CategoryService(ICategoryRepository categoryRepository, IUnitOfWork unitOfWork)
        {
            _categoryRepository = categoryRepository;
            _unitOfWork = unitOfWork;
        }


        public bool CheckCategoryNameExists(String Name)
        {
            return _categoryRepository.FilterBy(x => x.Name == Name).Any();
        }
        public bool CheckCategoryStatus(bool status)
        {
            return _categoryRepository.FilterBy(x => x.Status == status).ToList().Any();
        }

        public bool Create(CategoryViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                if (CheckCategoryNameExists(model.Name))
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NAME_ALREADY_EXIST_EXCEPTION);
                }
                var entity = new Category
                {
                    Name = model.Name,
                    Status = model.Status,
                };
                _categoryRepository.Add(entity);
                _unitOfWork.Commit();

                return true;
            }
        }
        public void DeleteById(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var categoryEntity = _categoryRepository.FindBy(Id);
                if (_categoryRepository.FindBy(Id) == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _categoryRepository.Delete(categoryEntity);
                _unitOfWork.Commit();
            }
        }

        public CategoryResponse FilterAndPage(CategoryRequest request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                CategoryResponse response = new CategoryResponse();
                IQueryable<Category> listCategoryViewModelForFiltering = _categoryRepository.All();

                //Filter
                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.Where(x => x.Name.Contains(request.SearchString));
                }
                if (!string.IsNullOrEmpty(request.SearchStatus))
                {
                    if (request.SearchStatus == "true")
                    {
                        listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.Where(x => x.Status == true);
                    }
                    else
                    {
                        listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.Where(x => x.Status == false);
                    }
                }

                
                //Sort
                switch (request.SortName)
                {
                    case "Name":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.OrderBy(x => x.Name);
                        }
                        else
                        {
                            listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.OrderByDescending(x => x.Name);
                        }
                        break;
                    case "Status":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.OrderBy(x => x.Status);
                        }
                        else
                        {
                            listCategoryViewModelForFiltering = listCategoryViewModelForFiltering.OrderByDescending(x => x.Status);
                        }
                        break;
                    default:
                        break;
                }
                //Pagination
                if(request.Size == 0 && request.PageNeeded == 0)
                {
                    request.PageNeeded= 1;
                    request.Size = listCategoryViewModelForFiltering.Count();
                }
                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = listCategoryViewModelForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = listCategoryViewModelForFiltering.Count();

                return response;
            }
        }

        public CategoryViewModel Get(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();
                _unitOfWork.Rollback();

                return category.MapToViewModel();
            }
        }

        public CategoryResponse GetAll(CategoryRequest request)
        {
            return FilterAndPage(request);
        }
        public List<CategoryViewModel> GetAll()
        {
            using (_unitOfWork.BeginTransaction())
            {
                return _categoryRepository.All().Select(x=>x.MapToViewModel()) .ToList();
            }
        }

        public bool Update(CategoryViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(model.Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                if (_categoryRepository.CheckExist(x=>x.Id!=model.Id && x.Name==model.Name))
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NAME_ALREADY_EXIST_EXCEPTION);
                }
                
                category.Status = model.Status;
                category.Name = model.Name;
                _categoryRepository.Update(category);

                _unitOfWork.Commit();
                return true;
            }
        }
    }
}

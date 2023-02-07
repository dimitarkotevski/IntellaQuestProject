using IntellaQeust.BusinessLogic.Categories;
using IntellaQeust.BusinessLogic.CategoryModel;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using System;
using System.Linq;

namespace IntellaQeust.Business.Services
{
    public interface ICategoryService
    {
        CategoryViewModel Get(Guid Id);
        CategoryResponse GetAll(CategoryRequest request);
        Guid Create(CategoryViewModel model);
        void Update(CategoryViewModel model);
        void DeleteById(Guid Id);
        bool CheckCategoryNameExists(String Name);
        bool CheckCategoryStatus(bool status);
        CategoryResponse FilterAndPagination(CategoryRequest request);
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
            return _categoryRepository.FilterBy(x=>x.Name==Name).Any();
        }
        public bool CheckCategoryStatus(bool status)
        {
            return _categoryRepository.FilterBy(x => x.Status == status).ToList().Any();
        }

        public Guid Create(CategoryViewModel model)
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

                return entity.Id;
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


        public CategoryViewModel Get(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(Id);
                if(category == null)
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
            using (_unitOfWork.BeginTransaction())
            {
                CategoryResponse response= new CategoryResponse();
                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items= _categoryRepository.All()
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = _categoryRepository.All().Count();
                _unitOfWork.Commit();
                return response;
            }
        }
        public CategoryResponse FilterAndPagination(CategoryRequest request)
        {
            /*using (_unitOfWork.BeginTransaction())
            {
                CategoryResponse response=new CategoryResponse();
                response.Items = (List<CategoryViewModel>)_categoryRepository.FilterBy(x => x.Name.Contains(request.SearchString));
                response.CurrentPage = request.Page;
                response.TotalItems=response.Items.Count;
                response.Size = request.Size;
                _unitOfWork.Commit();
                return response;
            }*/
            return null;
        }

        public void Update(CategoryViewModel model)
        {
            using(_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(model.Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }

                category.Name= model.Name;
                category.Status = model.Status;

                _categoryRepository.Update(category);
                _unitOfWork.Commit();
            }
        }
    }
}

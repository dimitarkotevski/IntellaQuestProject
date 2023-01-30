using IntellaQeust.BusinessLogic.CategoryModel;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace IntellaQeust.Business.Services
{
    public interface ICategoryService
    {
        CategoryViewModel Get(Guid Id);
        List<CategoryViewModel> GetAll();
        Guid Create(CategoryViewModel model);
        void Update(CategoryViewModel model);
        void DeleteById(Guid Id);
        bool CheckCategoryNameExists(String Name);
        bool CheckCategoryStatus(bool status);
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

        public List<CategoryViewModel> GetAll()
        {
            using (_unitOfWork.BeginTransaction())
            {
                var listCategories = _categoryRepository.All().Select(x => x.MapToViewModel()).ToList();
                _unitOfWork.Commit();
                return listCategories;
            }
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

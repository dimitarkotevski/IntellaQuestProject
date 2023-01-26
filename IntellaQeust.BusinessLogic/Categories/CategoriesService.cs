using IntellaQeust.BusinessLogic.CategoryModels;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.Domain;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Services
{
    public interface ICategoriesService
    {
        CategoriesViewModel Get(Guid Id);
        List<CategoriesViewModel> GetAll();
        Guid Create(CategoriesViewModel model);
        void Update(CategoriesViewModel model);
        void DeleteById(Guid Id);
        void Delete(CategoriesViewModel model);
        bool CheckCategoryNameExists(String Name);
        bool CheckCategoryStatus(bool status);
    }

    public class CategoriesService : ICategoriesService
    {
        private readonly ICategoriesRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CategoriesService(ICategoriesRepository categoryRepository, IUnitOfWork unitOfWork)
        {
            _categoryRepository = categoryRepository;
            _unitOfWork = unitOfWork;
        }


        public bool CheckCategoryNameExists(String Name)
        {
            return _categoryRepository.FilterBy(x=>x.Name==Name).ToList().Any();
        }
        public bool CheckCategoryStatus(bool status)
        {
            return _categoryRepository.FilterBy(x => x.Status == status).ToList().Any();
        }

        public Guid Create(CategoriesViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                if (CheckCategoryNameExists(model.Name))
                {
                    throw new BllException(ShopExceptionsMassages.CategoriesExceptionMassages.NAME_ALREADY_EXIST_EXCEPTION);
                }
                var categoryEntity = model.MapToModel();
                _categoryRepository.Add(model.MapToModel());
                _unitOfWork.Commit();
                return categoryEntity.Id;
            }
        }

        public void Delete(CategoriesViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _categoryRepository.Delete(model.MapToModel());
                _unitOfWork.Commit();
            }
        }

        public void DeleteById(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _categoryRepository.Delete(Id);
                _unitOfWork.Commit();
            }
        }

        public CategoriesViewModel Get(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(Id);
                if(category == null)
                {
                    throw new BllException(ShopExceptionsMassages.CategoriesExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();
                _unitOfWork.Rollback();

                return category.MapToViewModel();
            }
        }

        public List<CategoriesViewModel> GetAll()
        {
            using (_unitOfWork.BeginTransaction())
            {
                var listCategories = _categoryRepository.All().Select(x => x.MapToViewModel()).ToList();
                _unitOfWork.Commit();
                return listCategories;
            }
        }

        public void Update(CategoriesViewModel model)
        {
            using(_unitOfWork.BeginTransaction())
            {
                var category = _categoryRepository.FindBy(model.Id);
                if (category == null)
                {
                    throw new BllException(ShopExceptionsMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                // TODO : if not found throw exception

                category.Name= model.Name;
                category.Status = model.Status;

                _categoryRepository.Update(category);
                _unitOfWork.Commit();

            }
        }
    }
}

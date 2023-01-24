using IntellaQeust.BusinessLogic.CategoryModels;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.Domain;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQeust.BusinessLogic.CategoryService
{
    public interface ICategoriesService
    {
        CategoriesViewModel Get(Guid Id);
        List<CategoriesViewModel> GetAll();
        Guid Create(CategoriesViewModel model);
        void Update(CategoriesViewModel model);
        void DeleteById(Guid Id);
        void Delete(CategoriesViewModel model);
        bool CheckEmailExists(CategoriesViewModel model);
        bool CheckUsernameExists(CategoriesViewModel model);
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

        public bool CheckEmailExists(CategoriesViewModel model)
        {
            throw new NotImplementedException();
        }

        public bool CheckUsernameExists(CategoriesViewModel model)
        {
            throw new NotImplementedException();
        }

        public Guid Create(CategoriesViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var categoryEntity = new Categories
                {
                    Name = model.Name,
                };
                _categoryRepository.Add(categoryEntity);
                _unitOfWork.Commit();
                return categoryEntity.Id;
            }
        }

        public void Delete(CategoriesViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var category = new Categories
                {
                    Id = model.Id,
                    Name = model.Name,
                };
                _categoryRepository.Delete(category);
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
            _unitOfWork.BeginTransaction();

            var result = _categoryRepository.FindBy(Id);
            
            _unitOfWork.Commit();
            _unitOfWork.Rollback();
            
            return result.MapToViewModel();
        }

        public List<CategoriesViewModel> GetAll()
        {
            _unitOfWork.BeginTransaction();
            var result = _categoryRepository.All().Select(x => x.MapToViewModel()).ToList();
            _unitOfWork.Commit();
            return result;
        }

        public void Update(CategoriesViewModel model)
        {
            var category = _categoryRepository.FindBy(model.Id) ?? throw new CustomerNotFoundException("User not found");
            // TODO : if not found throw exception
            _unitOfWork.BeginTransaction();

            category.Name = model.Name;

            
            _categoryRepository.Update(category);
            _unitOfWork.Commit();

        }
    }
}

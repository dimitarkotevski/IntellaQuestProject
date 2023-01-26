using FluentValidation;
using FluentValidation.Attributes;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;

namespace IntellaQeust.BusinessLogic.CategoryModels
{
    [Validator(typeof(CategoriesViewModelValidator))]
    public class CategoriesViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Status { get; set; }
        public IList<LookupViewModel> Products { get; set; }
    }
    public class CategoriesViewModelValidator : AbstractValidator<CategoriesViewModel>
    {
        public CategoriesViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
            RuleFor(x => x.Status).NotEmpty().WithMessage("Status is required.");
        }
    }
}

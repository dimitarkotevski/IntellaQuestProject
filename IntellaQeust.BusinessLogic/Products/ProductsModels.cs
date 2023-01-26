using FluentValidation;
using FluentValidation.Attributes;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Domain;
using System;

namespace IntellaQeust.BusinessLogic.Models
{
    [Validator(typeof(ProductsViewModelValidator))]
    public class ProductsViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public LookupViewModel Category { get; set; }
    }
    public class ProductsViewModelValidator : AbstractValidator<ProductsViewModel>
    {
        public ProductsViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
        }
    }
}

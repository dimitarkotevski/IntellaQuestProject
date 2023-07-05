using FluentValidation;
using FluentValidation.Attributes;
using IntellaQuest.BusinessLogic.ViewModels;
using System;

namespace IntellaQeust.BusinessLogic.ViewModels
{
    [Validator(typeof(ShoppingCartsViewModelValidator))]
    public class ShoppingCartsViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
    public class ShoppingCartsListViewModel
    {
        public Guid Id { get; set; }
        public double Quality { get; set; }
        public ProductViewModel Product { get; set; }
    }
    public class ShoppingCartsViewModelValidator : AbstractValidator<ShoppingCartsViewModel>
    {
        public ShoppingCartsViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
        }
    }
}

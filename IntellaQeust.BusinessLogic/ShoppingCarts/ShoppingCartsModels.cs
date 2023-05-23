using FluentValidation;
using FluentValidation.Attributes;
using System;
using System.Collections.Generic;

namespace IntellaQeust.BusinessLogic.ViewModels
{
    [Validator(typeof(ShoppingCartsViewModelValidator))]
    public class ShoppingCartsViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double TotalCost { get; set; }
        public IList<ProductViewModel> Products { get; set; }
    }
    public class ShoppingCartsViewModelValidator : AbstractValidator<ShoppingCartsViewModel>
    {
        public ShoppingCartsViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
        }
    }
}

using FluentValidation;
using FluentValidation.Attributes;
using IntellaQuest.Domain;
using System;

namespace IntellaQeust.BusinessLogic.Orders
{
    //[Validator(typeof(OrderViewModelValidator))]
    public class OrderViewModel
    {
        public Guid Id { get; set; }
        public LookupViewModel Product { get; set; }
        public LookupViewModel Customer { get; set; }
        public float Quantity { get; set; }
    }
    public class OrderViewModelValidator : AbstractValidator<Order>
    {
        public OrderViewModelValidator()
        {
            RuleFor(x => x.Customer).NotEmpty().WithMessage("Customer is required.");
            RuleFor(x => x.Product).NotEmpty().WithMessage("Product is required.");
            RuleFor(x => x.Quantity).NotEmpty().WithMessage("Quantity is required.");
        }
    }
}

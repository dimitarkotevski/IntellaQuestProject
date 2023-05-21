using FluentValidation;
using FluentValidation.Attributes;
using IntellaQuest.Domain;
using IntellaQuest.Domain.Enums;
using System;

namespace IntellaQeust.BusinessLogic.Orders
{
    //[Validator(typeof(OrderViewModelValidator))]
    public class OrderViewModel
    {
        public Guid Id { get; set; }
        public LookupViewModel ShoppingCart { get; set; }
        public LookupViewModel Customer { get; set; }
        public OrderStatus OrderStatus { get; set; }
    }
    public class OrderViewModelValidator : AbstractValidator<Order>
    {
        public OrderViewModelValidator()
        {
            RuleFor(x => x.Customer).NotEmpty().WithMessage("Customer is required.");
            RuleFor(x => x.ShoppingCart).NotEmpty().WithMessage("Shopping Card is required.");
            RuleFor(x => x.OrderStatus).NotEmpty().WithMessage("Order Status is required.");
        }
    }
}

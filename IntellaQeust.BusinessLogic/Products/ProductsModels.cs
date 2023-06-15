﻿using FluentValidation;
using FluentValidation.Attributes;
using System;
using System.Collections.Generic;

namespace IntellaQeust.BusinessLogic.ViewModels
{
    [Validator(typeof(ProductsViewModelValidator))]
    public class ProductViewModel
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public LookupViewModel Category { get; set; }
    }
    public class ProductsViewModelValidator : AbstractValidator<ProductViewModel>
    {
        public ProductsViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
        }
    }
}

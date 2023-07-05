﻿using FluentValidation;
using FluentValidation.Attributes;
using System;
using System.Collections.Generic;

namespace IntellaQeust.BusinessLogic.ViewModels
{
    [Validator(typeof(CategoriesViewModelValidator))]
    public class CategoryViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Status { get; set; }
        public IList<LookupViewModel> Products { get; set; }
    }
    public class CategoriesViewModelValidator : AbstractValidator<CategoryViewModel>
    {
        public CategoriesViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
        }
    }
    public class CategoryLookupViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Status { get; set; }
        public string Url { get; set; }
    }
}

﻿using FluentValidation;
using FluentValidation.Attributes;
using IntellaQuest.Domain.Enum;
using System;

namespace IntellaQeust.BusinessLogic.ViewModels
{
    [Validator(typeof(PaymentViewModelValidator))]
    public class PaymentsViewModel
    {
        public Guid Id { get; set; }
        public string PaymentType { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string SecurityCode { get; set; }
    }
    public class PaymentsViewModelInfo
    {
        public Guid Id { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string SecurityCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string BillingAddress { get; set; }
        public string ZipPostalCode { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
    }
    public class PaymentsViewModelCard
    {
        public Guid Id { get; set; }
        public PaymentType PaymentType { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string SecurityCode { get; set; }
    }
    public class PaymentViewModelValidator : AbstractValidator<PaymentsViewModel>
    {
        public PaymentViewModelValidator() 
        {
            RuleFor(x => x.PaymentType).NotEmpty().WithMessage("Payment is required.");
            RuleFor(x => x.CardNumber).NotEmpty().WithMessage("CartNumber is required.");
            RuleFor(x => x.ExpirationDate).NotEmpty().WithMessage("Expiration Date is required.");
            RuleFor(x => x.SecurityCode).NotEmpty().WithMessage("Security Code is required.");
        }
    }
}

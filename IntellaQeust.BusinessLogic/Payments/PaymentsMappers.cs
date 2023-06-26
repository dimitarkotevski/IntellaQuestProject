using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using IntellaQuest.Domain.Enum;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class PaymentsMappers
    {
        public static PaymentsViewModel MapToViewModel(this Payment payment)
        {
            return new PaymentsViewModel
            {
                Id = payment.Id,
                PaymentType = payment.PaymentType.ToString(),
                CardNumber = payment.CardNumber,
                ExpirationDate = payment.ExpirationDate,
                SecurityCode = payment.SecurityCode,
            };
        }
        public static PaymentsViewModelInfo MapToViewModelInfo(this Payment payment)
        {
            return new PaymentsViewModelInfo
            {
                Id = payment.Id,
                PaymentType = payment.PaymentType,
                CardNumber = payment.CardNumber,
                ExpirationDate = payment.ExpirationDate,
                SecurityCode = payment.SecurityCode,
                FirstName = payment.FirstName,
                LastName = payment.LastName,
                City = payment.City,
                BillingAddress = payment.BillingAdress,
                ZipPostalCode = payment.ZipPostalCode,
                Country = payment.Country,
                PhoneNumber = payment.PhoneNumber,
            };
        }
        public static PaymentsViewModelCard MapToViewModelCard(this Payment payment)
        {
            return new PaymentsViewModelCard
            {
                Id = payment.Id,
                PaymentType = payment.PaymentType,
                CardNumber = payment.CardNumber,
                ExpirationDate = payment.ExpirationDate,
                SecurityCode = payment.SecurityCode,
            };
        }
    }
}

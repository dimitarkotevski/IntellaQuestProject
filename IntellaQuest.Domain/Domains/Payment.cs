using IntellaQuest.Domain.Enum;
using System;

namespace IntellaQuest.Domain
{
    public class Payment : BaseEntity
    {
        private PaymentType _paymentType;
        private string _cardNumber;
        private DateTime _expirationDate;
        private string _securityCode;
        private string _firstName;
        private string _lastName;
        private string _city;
        private string _billingAdress;
        private string _zipPostalCode;
        private string _country;
        private string _phoneNumber;

        public virtual PaymentType PaymentType
        {
            get => _paymentType;
            set => _paymentType = value;
        }
        public virtual string CardNumber
        {
            get => _cardNumber;
            set => _cardNumber = value;
        }
        public virtual DateTime ExpirationDate
        {
            get => _expirationDate;
            set => _expirationDate = value;
        }
        public virtual string SecurityCode
        {
            get => _securityCode;
            set => _securityCode = value;
        }
        public virtual string FirstName
        {
            get => _firstName;
            set => _firstName = value;
        }
        public virtual string LastName
        {
            get => _lastName;
            set => _lastName = value;
        }
        public virtual string City
        {
            get => _city;
            set => _city = value;
        }
        public virtual string BillingAdress
        {
            get => _billingAdress;
            set => _billingAdress = value;
        }
        public virtual string ZipPostalCode
        {
            get => _zipPostalCode;
            set => _zipPostalCode = value;
        }
        public virtual string Country
        {
            get => _country;
            set => _country = value;
        }
        public virtual string PhoneNumber
        {
            get => _phoneNumber;
            set => _phoneNumber = value;
        }

    }
}

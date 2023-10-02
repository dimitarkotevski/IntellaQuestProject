using FluentNHibernate.Mapping;
using IntellaQuest.Domain;
using IntellaQuest.Domain.Enum;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class PaymentMap : ClassMap<Payment>
    {
        public PaymentMap() 
        {
            Schema("dbo");
            Table("Payments");

            Id(p => p.Id);

            #region Attribute

            Map(p => p.CardNumber);
            Map(p => p.ExpirationDate);
            Map(p => p.SecurityCode);
            Map(p => p.CardHolder);
            Map(p => p.City);
            Map(p => p.BillingAdress);
            Map(p => p.ZipPostalCode);
            Map(p => p.Country);
            Map(p => p.PhoneNumber);

            #endregion

        }
    }
}

using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class PaymentMap : ClassMap<Payment>
    {
        public PaymentMap() 
        {
            Schema("dbo");
            Table("Payments");

            Id(p=>p.Id);

            #region Attribute
            Map(p => p.PaymentType)
                .Column("PaymentType")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();

            Map(p => p.CardNumber)
                .Column("CardNumber")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();

            Map(p => p.SecurityCode)
                .Column("SecurityCode")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();

            Map(p => p.ExpirationDate)
                .Column("ExpirationDate")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();

            Map(p => p.FirstName)
                .Column("FirstName")
                .Access.CamelCaseField(Prefix.Underscore)
                .Nullable();

            Map(p => p.LastName)
                .Column("LastName")
                .Access.CamelCaseField(Prefix.Underscore)
                .Nullable();

            Map(p => p.City)
                .Column("City")
                .Access.CamelCaseField(Prefix.Underscore)
                .Nullable();

            Map(p => p.BillingAddress)
                .Column("BillingAddress")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();

            Map(p => p.ZipPostalCode)
                .Column("ZipPostalCode")
                .Access.CamelCaseField(Prefix.Underscore)
                .Nullable();

            Map(p => p.Country)
                .Column("Country")
                .Access.CamelCaseField(Prefix.Underscore)
                .Nullable();

            Map(p => p.PhoneNumber)
                .Column("PhoneNumber")
                .Access.CamelCaseField(Prefix.Underscore)
                .Nullable();

            #endregion

        }
    }
}

using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class CustomerMap : ClassMap<Customer>
    {
        public CustomerMap() {
            Schema("dbo");
            Table("Customers");
            //Id
            Id(c => c.Id).GeneratedBy.Guid();

            #region Attributes

            Map(c => c.FirstName)
                .Column("FirstName")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
            Map(c => c.LastName)
                .Column("LastName")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
            Map(c => c.Email)
                .Column("Email")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
            Map(c => c.Username)
                .Column("Username")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
            Map(c => c.Password)
                .Column("Password")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();

            #endregion

            #region Foreign Key

            References(x => x.ShoppingCart)
                .Column("ShoppingCartId")
                .Access
                .CamelCaseField(Prefix.Underscore).LazyLoad();

            References(x => x.Payment)
                .Column("PaymentId")
                .Access
                .CamelCaseField(Prefix.Underscore).LazyLoad();

            HasMany(x => x.Orders)
                .Inverse()
                .Cascade.AllDeleteOrphan()
                .KeyColumn("CustomerId").LazyLoad();

            #endregion

        }
    }
}

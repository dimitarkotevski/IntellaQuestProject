using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Mapping
{
    public class CustomersMap : ClassMap<Customers>
    {
        public CustomersMap() {
            Schema("dbo");
            Table("Customers");
            //Id
            Id(c => c.Id).GeneratedBy.Guid();
            //Other attribute
            Map(c => c.Name)
                .Column("Name")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
            Map(c => c.Surname)
                .Column("Surname")
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
        }
    }
}

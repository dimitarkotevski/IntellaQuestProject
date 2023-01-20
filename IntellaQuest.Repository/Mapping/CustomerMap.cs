using FluentNHibernate.Mapping;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Repository.Mapping
{
    public class CustomerMap : ClassMap<Customer>
    {
        public CustomerMap() {
            Schema("dbo");
            Table("Customer");
            Id(c => c.Id).GeneratedBy.Guid();
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

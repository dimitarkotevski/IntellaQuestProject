using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Mapping
{
    public class CategoriesMap : ClassMap<Categories>
    {
        public CategoriesMap() {
            Schema("dbo");
            Table("Categories");

            Id(c => c.Id);

            Map(c => c.Name)
                .Column("Name")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
        }
    }
}

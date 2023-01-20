using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Mapping
{
    public class CategoryMap : ClassMap<Category>
    {
        public CategoryMap() {
            Schema("dbo");
            Table("Category");
            Id(c => c.Id).GeneratedBy.Guid();
            Map(c => c.Name)
                .Column("Name")
                .Access.CamelCaseField(Prefix.Underscore)
                .Not.Nullable();
        }
    }
}

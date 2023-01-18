using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Mapping
{
    public class CategoryMap : ClassMap<Category>
    {
        public CategoryMap() {
            Schema("dbo");
            Table("Category");
            Id(c => c.Id)
                .Column("CategoryId")
                .Access.CamelCaseField(Prefix.Underscore);
            Map(c => c.Name);
        }
    }
}

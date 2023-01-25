using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Repository.Mapping
{
    public class ProductMap : ClassMap<Products>
    {
        public ProductMap()
        {
            Schema("dbo");
            Table("Products");

            Id(c => c.Id);

            Map(c => c.Name);
            Map(c => c.Description);

            References(x => x.Category)
                .Column("CategoryId")
                .Not.LazyLoad();
        }
    }
}

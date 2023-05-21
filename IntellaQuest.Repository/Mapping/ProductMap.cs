using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class ProductMap : ClassMap<Product>
    {
        public ProductMap()
        {
            Schema("dbo");
            Table("Products");

            Id(c => c.Id);

            Map(c => c.Name);
            Map(c => c.Description);
            Map(c => c.Price);

            References(x => x.Category)
                .Column("CategoryId")
                .Access
                .CamelCaseField(Prefix.Underscore).LazyLoad();

            /*HasMany(x => x.Orders)
                .Inverse()
                .Cascade.AllDeleteOrphan()
                .KeyColumn("ProductId").LazyLoad();*/
        }
    }
}

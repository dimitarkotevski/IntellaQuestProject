using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class ShoppingCartMap : ClassMap<ShoppingCart>
    {
        public ShoppingCartMap() 
        {
            Schema("dbo");
            Table("ShoppingCarts");

            Id(c => c.Id);

            Map(c => c.TotalCost);

            HasMany(x => x.Products)
                .Inverse()
                .Cascade.AllDeleteOrphan()
                .KeyColumn("ProductId").LazyLoad();
        }
    }
}

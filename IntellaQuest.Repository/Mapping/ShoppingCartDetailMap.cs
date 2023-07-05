using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class ShoppingCartDetailMap : ClassMap<ShoppingCartDetail>
    {
        public ShoppingCartDetailMap()
        {
            Schema("dbo");
            Table("ShoppingCartDetails");

            Id(c => c.Id);

            Map(c => c.Quality);

            References(x => x.Product)
                .Column("ProductId").Access
                .CamelCaseField(Prefix.Underscore).LazyLoad();

        }
    }
}

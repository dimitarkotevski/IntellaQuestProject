using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class ShoppingCartProductMap : ClassMap<ShoppingCartProduct>
    {
        public ShoppingCartProductMap()
        {
            Schema("dbo");
            Table("ShoppingCardProducts");

            Id(c => c.Id);

            #region Attributes

            References(x => x.ShoppingCart)
                .Column("ShoppingCartId")
                .Access
                .CamelCaseField(Prefix.Underscore).LazyLoad();

            References(x => x.Product)
                .Column("ProductId")
                .Access
                .CamelCaseField(Prefix.Underscore).LazyLoad();

            #endregion
        }
    }
}

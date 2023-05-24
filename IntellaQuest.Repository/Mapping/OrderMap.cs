using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class OrderMap : ClassMap<Order>
    {
        public OrderMap()
        {
            Schema("dbo");
            Table("Orders");

            Id(o => o.Id);

            Map(o => o.OrderStatus);

            References(x => x.ShoppingCart)
                .Column("ShoppingCartId")
                .Cascade.SaveUpdate().LazyLoad();
            References(x => x.User)
                 .Column("UserId")
                 .Cascade.SaveUpdate().LazyLoad();
        }

    }
}

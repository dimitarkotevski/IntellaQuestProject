using FluentNHibernate.Mapping;
using IntellaQuest.Domain;
using IntellaQuest.Domain.Enums;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class OrderMap : ClassMap<Order>
    {
        public OrderMap()
        {
            Schema("dbo");
            Table("Orders");

            Id(o => o.Id);

            Map(o => o.OrderStatus)
                .Access.CamelCaseField(Prefix.Underscore)
                .CustomType<OrderStatus>()
                .Nullable();
            Map(o => o.TotalAmount);
            Map(o => o.DateCreated);

            References(x => x.ShoppingCart)
                .Column("ShoppingCartId")
                .Cascade.SaveUpdate().LazyLoad();
            References(x => x.User)
                 .Column("UserId")
                 .Cascade.SaveUpdate().LazyLoad();
        }

    }
}

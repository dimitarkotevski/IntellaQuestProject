using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Data.NHibernate.Mapping
{
    public class OrderMap// : ClassMap<Order>
    {
        /*public OrderMap() {
            *//*Schema("dbo");
            Table("Orders");

            Id(o => o.Id);

            Map(o => o.Quantity);

            References(x => x.Product)
                .Column("ProductId")
                .Cascade.SaveUpdate();
            References(x => x.Customer)
                 .Column("CustomerId")
                 .Cascade.SaveUpdate();*//*
        }*/

    }
}

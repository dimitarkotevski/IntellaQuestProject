using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Mapping
{
    public class ProductMap : ClassMap<Product>
    {
        public ProductMap()
        {
            Table("Product");
            Id(c => c.Id);
            Map(c => c.Name);
            Map(c => c.Description);
        }
    }
}

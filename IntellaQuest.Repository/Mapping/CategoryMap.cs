using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentNHibernate.Mapping;
using IntellaQuest.Domain;

namespace IntellaQuest.Mapping
{
    public class CategoryMap : ClassMap<Category>
    {
        public CategoryMap() {
            Schema("dbo");
            Table("Category");
            Id(c => c.Id);
            Map(c => c.Name);
        }
    }
}

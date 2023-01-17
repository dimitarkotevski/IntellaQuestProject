using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class Category : BaseEntity
    {
        private string _name;
        public Category() { }

        public Category(string title)
        {
            _name = title;
        }
        public virtual string Name { get { return _name; } set { _name = value; } }
    }
}

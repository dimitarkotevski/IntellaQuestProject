using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class Product : BaseEntity
    {
        string _name;
        string _description;
        public Product() { }

        public Product(string title, string description)
        {
            _name = title;
            _description = description;
        }

        public virtual string Name { get { return _name; } set { _name = value;} }
        public virtual string Description { get { return _description;} set { _description = value; } }
    }
}

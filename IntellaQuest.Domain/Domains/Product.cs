
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class Product : BaseEntity
    {
        private string _name;
        private string _description;
        private Category _category;
        private IList<Order> _orders;
        public Product() { }

        public Product(string title, string description, Category category, IList<Order> orders)
        {
            _name = title;
            _description = description;
            _category = category;
            _orders = orders;
        }

        public virtual string Name 
        { 
            get => _name; 
            set => _name = value; 
        }
        public virtual string Description 
        {
            get => _description; 
            set => _description = value; 
        }
        public virtual Category Category 
        { 
            get => _category; 
            set => _category = value; 
        }
        public virtual IList<Order> Orders
        {
            get => _orders;
            set => _orders = value;
        }
    }
}

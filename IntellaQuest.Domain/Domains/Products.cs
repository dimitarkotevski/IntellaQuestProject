using System;

namespace IntellaQuest.Domain
{
    public class Products : BaseEntity
    {
        private string _name;
        private string _description;
        private Categories _category;
        public Products() { }

        public Products(string title, string description, Categories category)
        {
            _name = title;
            _description = description;
            _category = category;
        }

        public virtual string Name { get => _name; set => _name = value; }
        public virtual string Description { get => _description; set => _description = value; }
        public virtual Categories Category { get => _category; set => _category = value; }
    }
}

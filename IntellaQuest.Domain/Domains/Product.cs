﻿
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class Product : BaseEntity
    {
        private string _name;
        private string _description;
        private Category _category;
        private IList<Order> _orders;
        private double _price;
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
        public virtual double Price
        {
            get => _price;
            set => _price = value;
        }
    }
}

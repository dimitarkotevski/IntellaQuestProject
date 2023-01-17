﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public enum Status
    {
        Active,
        Inactive
    }
    public class Order : BaseEntity
    {
        private Product _product;
        private Customer _customer;
        private float _quantity;
        private Status _status;
        public Order() { }

        public Order(Product product, Customer customer, float quantity)
        {
            _product = product;
            _customer = customer;
            _quantity = quantity;
            _status = Status.Active;
        }
        public virtual Product Product { get { return _product; } set { _product = value; } }
        public virtual Customer Customer { get { return _customer; } set { _customer = value; } }
        public virtual float Quantity { get { return _quantity; } set { _quantity = value; } }
        public virtual Status Status { get { return _status;} set { _status = value; } }
    }
}

using IntellaQeust.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class Order : BaseEntity
    {
        private Product _product;
        private Customer _customer;
        private float _quantity;
        public Order(){}

        public Order(Product product, Customer customer, float quantity)
        {
            _product = product;
            _customer = customer;
            _quantity = quantity;
        }
        public Product Product => _product;
        public Customer Customer => _customer;
        public float Quantity => _quantity;
    }
}

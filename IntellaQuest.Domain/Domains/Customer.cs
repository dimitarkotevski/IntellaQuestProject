﻿using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class Customer : BaseEntity
    {
        private string _firstName;
        private string _lastName;
        private string _email;
        private string _username;
        private string _password;
        private IList<Order> _orders;
        private Payment _payment;
        private ShoppingCart _shoppingCart;
        public Customer() { }
        public virtual string FirstName
        {
            get => _firstName;
            set => _firstName = value;
        }
        public virtual string LastName
        {
            get => _lastName;
            set => _lastName = value;
        }
        public virtual string Email
        {
            get => _email;
            set => _email = value;
        }
        public virtual string Username
        {
            get => _username;
            set => _username = value;
        }
        public virtual string Password
        {
            get => _password;
            set => _password = value;
        }
        public virtual IList<Order> Orders 
        { 
            get => _orders; 
            set=> _orders = value;
        }
        public virtual Payment Payment
        {
            get => _payment;
            set => _payment = value;
        }
        public virtual ShoppingCart ShoppingCart
        {
            get => _shoppingCart;
            set => _shoppingCart = value;
        }
    }
}

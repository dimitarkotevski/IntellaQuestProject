using System;
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class User : BaseEntity
    {
        private string _firstName;
        private string _lastName;
        private string _email;
        private string _username;
        private string _password;
        private string _address;
        private Payment _payment;
        private ShoppingCart _shoppingCart;
        private IList<Order> _orders;
        private IList<FavouriteProducts> _favouriteProducts;
        public User() 
        {
            _favouriteProducts = new List<FavouriteProducts>();
            _orders = new List<Order>();
        }
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
        public virtual string Address
        {
            get => _address; 
            set => _address = value;
        }
        public virtual IList<FavouriteProducts> FavouriteProducts
        {
            get => _favouriteProducts; 
            set => _favouriteProducts = value;
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

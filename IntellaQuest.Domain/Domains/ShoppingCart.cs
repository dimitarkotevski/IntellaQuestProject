using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class ShoppingCart : BaseEntity
    {
        private User _user;
        private Product _product;
        private float _quantity;
        public virtual float Quantity 
        { 
            get => _quantity;
            set => _quantity = value;
        }
        public virtual User User
        {
            get=> _user;
            set => _user = value;
        }
        public virtual Product Product 
        { 
            get => _product;
            set => _product = value;
        }
    }
}

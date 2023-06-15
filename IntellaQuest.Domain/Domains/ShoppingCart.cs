using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class ShoppingCart : BaseEntity
    {
        private IList<Product> _products;
        private float _quantity;
        public virtual float Quantity 
        { 
            get => _quantity;
            set => _quantity = value;
        }
        public virtual IList<Product> Products 
        { 
            get => _products;
            set => _products = value;
        }
    }
}

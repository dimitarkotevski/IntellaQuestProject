using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class ShoppingCart : BaseEntity
    {
        private IList<Product> _products;
        private float _totalCost;
        public virtual float TotalCost 
        { 
            get =>  _totalCost;
            set => _totalCost = value;
        }
        public virtual IList<Product> Products 
        { 
            get => _products;
            set => _products = value;
        }
    }
}

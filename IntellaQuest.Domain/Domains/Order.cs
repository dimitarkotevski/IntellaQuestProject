using IntellaQuest.Domain.Enums;

namespace IntellaQuest.Domain
{
    public class Order : BaseEntity
    {
        private Customer _customer;
        private ShoppingCart _shoppingCart;
        private OrderStatus _orderStatus;
        public Order() { }
        public virtual Customer Customer 
        {
            get => _customer;
            set => _customer = value;
        }
        public virtual ShoppingCart ShoppingCart
        {
            get => _shoppingCart;
            set => _shoppingCart = value;
        }
        public virtual OrderStatus OrderStatus
        {
            get => _orderStatus; 
            set { _orderStatus = value; }
        }
    }
}

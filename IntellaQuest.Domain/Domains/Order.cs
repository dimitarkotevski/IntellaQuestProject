using IntellaQuest.Domain.Enums;

namespace IntellaQuest.Domain
{
    public class Order : BaseEntity
    {
        private User _user;
        private ShoppingCart _shoppingCart;
        private OrderStatus _orderStatus;
        public Order() { }
        public virtual User User 
        {
            get => _user;
            set => _user = value;
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

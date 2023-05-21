namespace IntellaQuest.Domain
{
    public class ShoppingCartProduct : BaseEntity
    {
        private ShoppingCart _shoppingCart;
        private Product _product;

        public virtual ShoppingCart ShoppingCart
        {
            get => _shoppingCart;
            set => _shoppingCart = value;
        }
        public virtual Product Product
        {
            get => _product; 
            set => _product = value;
        }
    }
}

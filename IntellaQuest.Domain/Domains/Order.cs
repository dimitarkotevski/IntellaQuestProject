namespace IntellaQuest.Domain
{
    public class Order : BaseEntity
    {
        private Product _product;
        private Customer _customer;
        private float _quantity;
        public Order() { }
        public virtual Product Product { get { return _product; } set { _product = value; } }
        public virtual Customer Customer { get { return _customer; } set { _customer = value; } }
        public virtual float Quantity { get { return _quantity; } set { _quantity = value; } }
    }
}

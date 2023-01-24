namespace IntellaQuest.Domain
{
    public enum Status
    {
        Active,
        Inactive
    }
    public class Orders : BaseEntity
    {
        private Products _product;
        private Customers _customer;
        private float _quantity;
        private Status _status;
        public Orders() { }

        public Orders(Products product, Customers customer, float quantity)
        {
            _product = product;
            _customer = customer;
            _quantity = quantity;
            _status = Status.Active;
        }
        public virtual Products Product { get { return _product; } set { _product = value; } }
        public virtual Customers Customer { get { return _customer; } set { _customer = value; } }
        public virtual float Quantity { get { return _quantity; } set { _quantity = value; } }
        public virtual Status Status { get { return _status;} set { _status = value; } }
    }
}

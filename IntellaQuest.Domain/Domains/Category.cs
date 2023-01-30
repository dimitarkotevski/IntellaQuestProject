
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class Category : BaseEntity
    {
        private string _name;
        private bool _status;
        private IList<Product> _products;
        

        public Category(string name, bool status, IList<Product> products)
        {
            _name = name;
            _status = status;
            _products= new List<Product>();
            _products= products;
        }
        public Category()
        {
            _products = new List<Product>();
        }
        public virtual string Name
        {
            get => _name;
            set => _name = value;
        }
        public virtual bool Status
        {
            get => _status;
            set => _status = value;
        }
        public virtual IList<Product> Products
        {
            get => _products;
            set => _products = value;
        }
    }
}

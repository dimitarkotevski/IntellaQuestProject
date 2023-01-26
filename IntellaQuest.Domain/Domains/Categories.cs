
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class Categories : BaseEntity
    {
        private string _name;
        private bool _status;
        private IList<Products> _products;
        

        public Categories(string name, bool status)
        {
            _name = name;
            _status = status;
            _products= new List<Products>();
        }
        public Categories(string name)
        {
            _name = name;
            _status = true;
        }
        public Categories()
        {
            _products = new List<Products>();
        }

        public Categories(string name, bool status, IList<Products> products) : this(name, status)
        {
            _products = products;
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
        public virtual IList<Products> Products
        {
            get => _products;
            set => _products = value;
        }
    }
}

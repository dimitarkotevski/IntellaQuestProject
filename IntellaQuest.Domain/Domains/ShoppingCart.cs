
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class ShoppingCart : BaseEntity
    {
        private string _name;
        private bool _active;
        private IList<ShoppingCartDetail> _shoppingCartDetails;
        public virtual string Name 
        { 
            get => _name;
            set => _name = value;
        }
        public virtual bool Active
        {
            get => _active;
            set => _active = value;
        }
        public virtual IList<ShoppingCartDetail> ShoppingCartDetails 
        { 
            get => _shoppingCartDetails; 
            set => _shoppingCartDetails = value;
        }
    }
}

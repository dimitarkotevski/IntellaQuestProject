using System.Collections;
using System.Collections.Generic;

namespace IntellaQuest.Domain
{
    public class Customer : BaseEntity
    {
        private string _name;
        private string _surname;
        private string _email;
        private string _username;
        private string _password;
        private IList<Order> _orders;
        public Customer() { }
        public virtual string Name
        {
            get => _name;
            set => _name = value;
        }
        public virtual string Surname
        {
            get => _surname;
            set => _surname = value;
        }
        public virtual string Email
        {
            get => _email;
            set => _email = value;
        }
        public virtual string Username
        {
            get => _username;
            set => _username = value;
        }
        public virtual string Password
        {
            get => _password;
            set => _password = value;
        }
        public virtual IList<Order> Orders 
        { 
            get => _orders; 
            set=> _orders = value;
        }
    }
}

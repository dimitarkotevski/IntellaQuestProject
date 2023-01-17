using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class Customer:BaseEntity
    {
        private string _name;
        private string _surname;
        private string _email;
        private string _username;
        private string _password;
        public Customer() { }

        public Customer(string name, string surname, string email, string username, string password)
        {
            _name = name;
            _surname = surname;
            _email = email;
            _username = username;
            _password = password;
        }

        public virtual string Name { get { return _name; } set { _name = value; } }
        public virtual string Surname { get { return _surname; }
            set { _surname = value; } }
        public virtual string Email { get { return _email;} set { _email = value; } }
        public virtual string Username { get { return _username;} set { _username = value; } }
        public virtual string Password { get { return _password;} set { _password = value; } }
    }
}

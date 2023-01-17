using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class Customer : BaseEntity
    {
        private string _name;
        private string _surname;
        private string _email;
        private string _username;
        private string _password;
        public Customer(){}

        public Customer(string name, string surname, string email, string username, string password)
        {
            _name = name;
            _surname = surname;
            _email = email;
            _username = username;
            _password = password;
        }

        public string Name => _name;
        public string Surname => _surname;
        public string Email => _email;
        public string Username => _username;
        public string Password => _password;

    }
}

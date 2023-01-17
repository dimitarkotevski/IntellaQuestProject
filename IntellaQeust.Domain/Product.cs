using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQeust.Domain
{
    public class Product : BaseEntity
    {
        string _title;
        string _description;
        public Product() { }

        public Product(string title, string description)
        {
            _title = title;
            _description = description;
        }

        public string Title => _title;
        public string Description => _description;
    }
}

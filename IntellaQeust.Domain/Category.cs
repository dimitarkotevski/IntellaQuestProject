using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQeust.Domain
{
    public enum Status
    {
        Active,
        Inactive
    }
    public class Category : BaseEntity
    {
        private string _title;
        private Status _status;
        public Category() { }

        public Category(string title, Status status)
        {
            _title = title;
            _status = status;
        }
        public string Title => _title;
        public Status Status => _status;
        public string StatusText => _status.ToString();
    }
}
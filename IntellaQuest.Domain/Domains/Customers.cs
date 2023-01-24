namespace IntellaQuest.Domain
{
    public class Customers : BaseEntity
    {
        private string _name;
        private string _surname;
        private string _email;
        private string _username;
        private string _password;
        public Customers() { }

        public Customers(string name, string surname, string email, string username, string password)
        {
            _name = name;
            _surname = surname;
            _email = email;
            _username = username;
            _password = password;
        }

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
    }
}

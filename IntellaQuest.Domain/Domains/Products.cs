namespace IntellaQuest.Domain
{
    public class Products : BaseEntity
    {
        string _name;
        string _description;
        public Products() { }

        public Products(string title, string description)
        {
            _name = title;
            _description = description;
        }

        public virtual string Name { get { return _name; } set { _name = value;} }
        public virtual string Description { get { return _description;} set { _description = value; } }
    }
}

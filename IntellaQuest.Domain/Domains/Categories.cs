
namespace IntellaQuest.Domain
{
    public class Categories : BaseEntity
    {
        private string _name;
        private bool _status;
        public Categories() { }

        public Categories(string name, bool status)
        {
            _name = name;
            _status = status;
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
    }
}

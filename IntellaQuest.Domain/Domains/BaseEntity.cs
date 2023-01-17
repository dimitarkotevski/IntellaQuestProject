using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class BaseEntity
    {
        private Guid _id;
        public virtual Guid Id { get { return _id; } set { _id = value; } }
    }
}

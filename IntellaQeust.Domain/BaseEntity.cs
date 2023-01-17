using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Domain
{
    public class BaseEntity
    {
        private Guid _id;

        public Guid Id=> _id;
    }
}

using System;

namespace IntellaQeust.BusinessLogic.Requests
{
    public class ProductRequest : RequestModel
    {
        public Guid CategoryId { get; set; }
    }
}

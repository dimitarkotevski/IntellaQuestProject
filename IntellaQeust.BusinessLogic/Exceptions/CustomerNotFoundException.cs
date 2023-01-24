using System;

namespace IntellaQeust.BusinessLogic.Exceptions
{
    public class CustomerNotFoundException : Exception
    {
        public CustomerNotFoundException(string message) : base(message)
        {
        }
    }
}

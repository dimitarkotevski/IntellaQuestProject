using System;

namespace IntellaQeust.BusinessLogic.Exceptions
{
    public class BllException : Exception
    {
        public BllException(string message) : base(message)
        {
        }
    }
}

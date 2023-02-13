namespace IntellaQeust.BusinessLogic.Requests
{
    public class RequestModel
    {
        public string SearchString { get; set; }
        public string SortName { get; set; }
        public string isAscending { get; set; }
        public int PageNeeded { get; set; }
        public int Size { get; set; }
    }
}

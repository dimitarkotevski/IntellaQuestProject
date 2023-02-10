namespace IntellaQeust.BusinessLogic.Categories
{
    public class Request
    {
        public string SearchString { get; set; }
        public string SearchStatus { get; set; }
        public string SortName { get; set; }
        public string isAscending { get; set; }
        public int PageNeeded { get; set; }
        public int Size { get; set; }
    }
}

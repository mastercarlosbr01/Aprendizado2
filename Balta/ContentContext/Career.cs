namespace Balta.ContentContext
{

    public class Career : Content
    {
        public Career(string title, string url)
        :base(title,url)
        {
            Items = new List<CareerItem>();
        }
        public IList<CareerItem> Items { get; set; }
        public int TotalCourses
        {
            get
            {
                return Items.Count;
            }
        }

        //public int TotalCourses => Items.Count; // Expression Body, caso queira diminuir por conta por conta de ter só uma linha no get

    }
}
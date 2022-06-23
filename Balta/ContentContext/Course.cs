using Balta.ContentContext;
using Balta.ContentContext.Enums;
using System.Collections.Generic;

namespace Balta.ContentContext
{
    public class Course : Content
    {
        public Course(string title, string url)
        : base(title, url)
        {
            Modules = new List<Module>();

        }
        public string Tag { get; set; } //2002
        public IList<Module> Modules { get; set; }
        public double DurationInMinutes { get; set; }
        public EContentLevel Level { get; set; }

    }


}
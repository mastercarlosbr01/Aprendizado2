using System;
using static System.Console;
using Balta.ContentContext;

namespace Balta
{
    class Program
    {
        static void Main(string[] args)
        {
            Clear();
            var articles = new List<Article>();
            articles.Add(new Article("Artigo sobre o Flamengo", "Como jogar decentemente"));
            articles.Add(new Article("Artigo sobre o Fluminense", "Como jogar ferradamente"));
            articles.Add(new Article("Artigo sobre o Vasco", "Como jogar na segunda divisão"));

            // foreach (var article in articles)
            // {
            //     Write(article.Id + " - ");
            //     Write(article.Url + " - ");
            //     Write(article.Title+ "\n");
            // }

            var courses = new List<Course>(); // sempre inicializar a lista
            var courseOOP = new Course("Fundamento OOP", "fundamentos-oop");
            var courseCsharp = new Course("Fundamento C#", "fundamentos-csharp");
            var courseAspnet = new Course("Fundamento APS.NET", "fundamentos-apsnet");
            courses.Add(courseOOP);
            courses.Add(courseCsharp);
            courses.Add(courseAspnet);

            var careers = new List<Career>();
            var careerDotnet = new Career("Especialista . Net", "especialista-dotnet");
            var careerItem = new CareerItem(1, "Comece por aqui!!", "", null);
            var careerItem2 = new CareerItem(2, "Aprenda OOP", "", null);
            var careerItem3 = new CareerItem(3 ,"Aprenda.NET", "", null);


            careerDotnet.Items.Add(careerItem);
            careerDotnet.Items.Add(careerItem2);
            careerDotnet.Items.Add(careerItem3);


            careers.Add(careerDotnet);

            foreach (var career in careers)
            {
                WriteLine(career.Title);
                foreach (var item in career.Items.OrderByDescending(x=>x.Order)) // colocando na ordem Descending descendente - orderby ascendente 
                {
                    WriteLine($"{item.Order} - {item.Title}");

                }
            }






        }
    }
}
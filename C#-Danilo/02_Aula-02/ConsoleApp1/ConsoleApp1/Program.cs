using System;
using static System.Console;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Clear();

            var name = "Carlos Henrique Brasil";

            var bol = true;

            WriteLine(bol);
            WriteLine($"Olhá meu nome é {name}");

            var bolled = bool.Parse("false");
            bool bolled2 = Convert.ToBoolean("true");

            WriteLine(bolled);
            WriteLine(bolled2);



        }
    }
}
 
using System;
using static System.Console;
using System.Threading;


namespace AreaRetangulo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            Retangulo retangulo = new Retangulo();

            Console.WriteLine("Calcular a area de um retangulo ");
            Console.Write("Digite a base do retangulo: ");
            retangulo.Base = Convert.ToDouble(Console.ReadLine());
            Console.Write("Digite a base do Altura: ");
            retangulo.Altura = Convert.ToDouble(Console.ReadLine());

            retangulo.ExibirCalculo();
            Console.ReadKey();

        }
    }
}
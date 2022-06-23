using System;
using static System.Console;
using System.Threading;


namespace Calculator_Age
{
    class Program
    {
        static void Main(string[] args)
        {
            Clear();
            WriteLine("Programa que  calcula a idade de uma pessoa");
            Write("Nome da Pessoa: ");
            String nome = ReadLine();
            Write("Ano de nascimento: ");
            int ano = Convert.ToInt32(ReadLine());
            WriteLine("\n\n");

            Pessoa pessoa;

            pessoa = new Pessoa(nome, ano);
            pessoa.ExibirDados();
            WriteLine("\n\n");

            Console.ReadLine();
        }
    }
}
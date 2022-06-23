using System;
using static System.Console;
using System.Threading;


namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Clear();
            Menu();








        }

        public static void Menu()
        {

            Clear();
            Person idade1;
            idade1 = new Person();
            //idade1.setCPF("asdasdasd");


            WriteLine("Qual ação deseja fazer: ");
            WriteLine("1 - Antecessor e Sucessor");
            WriteLine("2 - Dobro, Triplo e Raiz");
            WriteLine("3 - Tabuada");

            WriteLine("0 - Sair");


            Write("Opção: ");
            int opcao = int.Parse(ReadLine());
            switch (opcao)
            {
                case 1: Action.AnteSuce(); break;
                case 2: Action.DobroTriRaiz(); break;
                case 3: Action.Tabuada(); break;

                case 0: System.Environment.Exit(0); break; //Sair
                default: Menu(); break;
            }
        }


    }
}
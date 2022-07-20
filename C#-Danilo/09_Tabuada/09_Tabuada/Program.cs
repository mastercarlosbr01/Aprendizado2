using Classes;
using Intro;
using System;
using static System.Console;

namespace Inicial
{
    public class Program 
    {
        public static void Main(string[] args)
        {
            Clear();

            //Menu.Menuzin();

            var clientes =  Cliente.LerClientes(); //  Estático serve para todos 

            var cliente = new Cliente();
            cliente.Nome = "Geraldo";
            cliente.Telefone = "asda3123sda";
            cliente.CPF = "ATestetestado";
            cliente.Gravar();

            //Cliente c1 = new Cliente("Carlão", "35994758698", "555555558886");
            //c1.Gravar();
            //Cliente c2 = new Cliente { CPF = "55555555555", Nome = "Carlãoc2", Telefone = "35698654588" };
            //c2.Gravar();

            foreach (Cliente c in clientes) {
                Console.WriteLine(c.Nome);
            }
            ReadKey();
        }
    }
}

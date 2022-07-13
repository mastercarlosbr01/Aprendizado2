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
            cliente.Nome = "Carlos";
            cliente.Telefone = "35988119443";
            cliente.CPF = "Ai é demaisopaaaaaaa";
            cliente.Gravar();



        }
    }
}

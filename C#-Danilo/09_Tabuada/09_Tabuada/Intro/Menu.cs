using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;
using System.Threading;
using Operations;

namespace Intro
{
    public class Menu
    {
        public const int SAIDA_PROGRAM = 0;
        public const int SOMA = 1;
        public const int MULT = 2;
        public const int DIV = 3;
        public const int SUB = 4;
        public const int MEDIA = 5;
        public static void Menuzin()
        {
            WriteLine("===================================");
            WriteLine("       Seja Bem vindo!!!!!");
            WriteLine("===================================");
            WriteLine("\n\n");

            Thread.Sleep(1000);
            Write("Digite seu nome: ");
            string name = ReadLine();
            WriteLine("\n\n");

            string mensagem = $"\nSeja bem vindo(a) {name}!!!\nEscolha sua opção:\n0 - Sair do programa\n1 - Soma\n2 - Multiplicação\n3 - Divisão\n4 - Subtração\n5 - Calcule sua média";
            WriteLine(mensagem);
            Write("\nDigite sua opção: ");
            int opcao = int.Parse(ReadLine());
            Thread.Sleep(1000);

            switch (opcao)
            {
                case SAIDA_PROGRAM: break; //saida

                case SOMA: ProgramOperations.Soma(); break;
                case MULT: ProgramOperations.Mult(); break;
                case DIV: ProgramOperations.Div(); break;
                case SUB: ProgramOperations.Sub(); break;
                case MEDIA: ProgramOperations.MediaAluno(name); break;

            }
        }
    }
}

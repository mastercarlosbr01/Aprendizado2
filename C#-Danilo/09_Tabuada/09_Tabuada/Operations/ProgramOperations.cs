using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;
using System.Threading;
using Intro;
using System.Configuration;

namespace Operations
{
    public class ProgramOperations
    {

        public static void Soma()
        {
            Clear();
            Write("Digite o primeiro valor: ");
            int var1 = int.Parse(ReadLine());
            Write("Digite o segundo valor: ");
            int var2 = int.Parse(ReadLine());
            WriteLine("\n\n");
            WriteLine($"{var1} + {var2} = {var2 + var1}");
            WriteLine("\n\n");

            ReadKey();
            Clear();
            Menu.Menuzin();
        }
        public static void Mult()
        {
            Clear();
            Write("Digite o primeiro valor: ");
            int var1 = int.Parse(ReadLine());
            Write("Digite o segundo valor: ");
            int var2 = int.Parse(ReadLine());
            WriteLine("\n\n");
            WriteLine($"{var1} * {var2} = {var2 * var1}");
            WriteLine("\n\n");


            ReadKey();
            Clear();
            Menu.Menuzin();
        }
        public static void Div()
        {
            Clear();
            Write("Digite o primeiro valor: ");
            int var1 = int.Parse(ReadLine());
            Write("Digite o segundo valor: ");
            int var2 = int.Parse(ReadLine());
            WriteLine("\n\n");
            WriteLine($"{var1} / {var2} = {var2 / var1}");
            WriteLine("\n\n");

            ReadKey();
            Clear();
            Menu.Menuzin();
        }
        public static void Sub()
        {
            Clear();
            Write("Digite o primeiro valor: ");
            int var1 = int.Parse(ReadLine());
            Write("Digite o segundo valor: ");
            int var2 = int.Parse(ReadLine());
            WriteLine("\n\n");
            WriteLine($"{var1} - {var2} = {var2 - var1}");
            WriteLine("\n\n");

            ReadKey();
            Clear();
            Menu.Menuzin();
        }
        public static void MediaAluno(string nome)
        {
            Clear();
            WriteLine($"Olá novamente {nome}!!\n\nSeja bem vindo!!\n");
            Thread.Sleep(1000);
            WriteLine(ConfigurationManager.AppSettings["materias_escr"]+"\n");
            Write("Português: ");
            var port = int.Parse(ReadLine());
            Write("\nMatemática: ");
            var mat = int.Parse(ReadLine());
            Write("\nGeografia: ");
            var geo = int.Parse(ReadLine());
            var totals = port + mat + geo;
            var media = totals / 3;
            WriteLine("\n\n");
            Write("Calculando a média.");

            for (int i = 1; i < 6; i++)
            {
                Thread.Sleep(700);
                Write(".");
            }
            Thread.Sleep(1000);

            if (media < 6)
            {
                WriteLine($"\n\nVocê foi REPROVADO!\nMédia: {media.ToString("F")}\n\n");
            }
            else
            {
                WriteLine($"\n\nParabés você está APROVADO!\nMédia: {media.ToString("F")}");
                WriteLine("Boa Sorte na faculdade de medicina!!!\n\n");
            }

            ReadKey();
            Clear();
            Menu.Menuzin();
        }
    }
}

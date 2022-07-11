using System;
using System.IO;
using System.Threading;
using static System.Console;

namespace _07_Funções_Recursivas
{
    internal class Program
    {
        public static void LerArquivo(string nomeArquivo)
        {


            using (StreamReader arquivo = File.OpenText(nomeArquivo))
            {
                string linha;
                while ((linha = arquivo.ReadLine()) != null)
                {
                    WriteLine(linha);
                }
            }



        }
        static void Main(string[] args)
        {
            Clear();

            LerArquivo(@"C:\Arquivos\arq.txt");
            ReadKey();
        }


    }
}

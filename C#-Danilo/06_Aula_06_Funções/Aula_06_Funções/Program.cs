using System;
using System.IO;
using System.Threading;
using static System.Console;

namespace Aula_06_Funções
{
    public class Program
    {
        static void Main(string[] args)
        {
            //Respeitando o main posso chamar os arquivos static sem instanciar ou chamar;
            //tipo void não retorna nada, só mostra;
            //funções já mostram alguns dados e ainda você tem que colocar o retorno dela;
            //
            Clear();
            //Tabuada(2, 10);
            //ReadKey();

            //var multipli = new Program();
            //WriteLine(multipli.multiplicacao(2, 6));

            LerArquivo(@"C:\Arquivos\arq1.txt");
            ReadKey();  

        }
        public static void Calcular()
        {
            int A = 2;
            int B = 3;
            int C = A + B;
            WriteLine(C);
        }
        public static void Tabuada(int num1, int num2)
        {
            if ((num1 <= 0 || num1 == null) && (num2 <= 0 || num2 == null))
            {
                WriteLine("Dado inválido!");
            }
            else
            {
                for (int i = 0; i < (num2 + 1); i++)
                {
                    WriteLine($"{num1} x {i} = {num1 * i}");
                }
            }
        }
        public int multiplicacao(int num1 = 0, int num2 = 0)
        {

            return num1 * num2;
        }
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

    }
}

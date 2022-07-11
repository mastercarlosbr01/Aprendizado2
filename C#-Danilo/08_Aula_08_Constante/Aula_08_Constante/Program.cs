using System;
using static System.Console;


namespace Aula_08_Constante
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Clear();
            Console.WriteLine("Digite um valor para verificacação: ");
            int valor = int.Parse(Console.ReadLine());
            int resultado = exibibrProgram(valor);
            Console.WriteLine($"Seu salário será de {resultado}");


            ReadKey();

        }
        // Para seguir padrão de programação, utilizo em upperCase. Como o proprio nome diz, nunca vai se mudar;
        public const int TIPO_SALARIO = 1;

        public static int exibibrProgram(int valor) {
            if (TIPO_SALARIO == valor)
            {
                return valor + 50;
            }
            else
            {
                return valor - 100;
            }
        }

    }
}

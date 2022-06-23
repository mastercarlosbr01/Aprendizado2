using System;
using System.Globalization;
using static System.Console;

namespace OpLogic
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Clear();

            var num = 1;
            var num2 = 2;

            var num3 = (num == num2) ? 5 : 89; // Ternário para fazer uma verificação

            var salario = 2600;

            var salarioConver = salario.ToString("C", CultureInfo.CurrentCulture);
            var opcao = 2;

            switch (opcao) {
                case 1:
                    WriteLine("To lascado aqui mas está bom");
                    break;
                case 2:
                    WriteLine($"O valor do meu salário poderia ser mais de {salarioConver}");
                    break;
                default:
                    WriteLine("Nenhuma opção volte novamente");
                    break;
            }

            Read();

        }
    }
}

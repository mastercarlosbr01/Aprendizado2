using System;
using static System.Console;
using System.Threading;


namespace pooMensagem
{
    class Program
    {
        static void Main(string[] args)
        {
            Clear();
            Mensagem msg1, msg2;
            msg1 = new Mensagem();
            msg1.TextoMensagem = "Teste agora com a segunda aula";
            // msg1.SetTextMensage("ola estou andando mesmo estanod sentado"); // caso queira pegar o valor pelo set 
            // WriteLine(msg1.GetTextMensage()); // Caso queira mostrar o valor direto no writeline 

            msg1.ExibirMensagem();

            msg2 = new Mensagem();
            //msg2.TextoMensagem = "Carlão";
            // msg2.ExibirMensagem();




            ReadKey();
        }
    }
}
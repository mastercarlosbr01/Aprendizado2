using static System.Console;


namespace MaiorIdade
{
    class Program
    {
        static void Main(string[] args)
        {
            Clear();
            // Pessoa p1;
            // Pessoa p2;
            // Pessoa p3;

            // Console.WriteLine("Determina qual pessoa pe a mais velha: ");

            // Write("Nome da 1ª pessoa: ");
            // p1 = new Pessoa();
            // p1.Nome = ReadLine();
            // Write("Idade da 1ª Pessoa: ");
            // p1.Idade = Convert.ToInt32(ReadLine());
            // WriteLine("\n\n");

            // Thread.Sleep(500);

            // Write("Nome da 2ª pessoa: ");
            // p2 = new Pessoa();
            // p2.Nome = ReadLine();
            // Write("Idade da 2ª Pessoa: ");
            // p2.Idade = Convert.ToInt32(ReadLine());
            // WriteLine("\n\n");

            // Thread.Sleep(500);

            // Write("Nome da 3ª pessoa: ");
            // String nome = ReadLine();
            // Write("Idade da 3ª Pessoa: ");
            // int idade = Convert.ToInt32(ReadLine());
            // p3 = new Pessoa(nome, idade);
            // WriteLine("\n\n");
            // Thread.Sleep(500);

            // if ((p1.Idade > p2.Idade) && (p1.Idade > p3.Idade)) {
            //     WriteLine($"A idade de {p1.Nome} é a maior: {p1.Idade} anos\n\n");
            //     p1.MostrarDados(true);
            // } else if ((p2.Idade > p1.Idade) && (p2.Idade > p3.Idade)){
            //     WriteLine($"A idade de {p2.Nome} é a maior: {p2.Idade} anos");
            //     p2.MostrarDados(true);

            // } else if  ((p3.Idade > p1.Idade) && (p3.Idade > p2.Idade)) {
            //     WriteLine($"A idade de {p3.Nome} é a maior: {p3.Idade} anos");
            //     p3.MostrarDados(true);

            // } else {
            //     Pessoa p4 = new Pessoa();
            //     p4.MostrarDadosIguais(true);
            // }

            Names nomes = new Names();
            Menu();

            Write("Opção: ");
            int opcao = int.Parse(ReadLine());
            if (opcao != 0)
            {

                if (opcao != 1)
                {
                    Clear();
                    WriteLine("Digite uma opção invalida!");
                    ReadKey();
                    Menu();
                }
            }



            switch (opcao)
            {

                case 1: nomes.ListarNomes(); Menu(); break;
                case 0: System.Environment.Exit(0); break; //Sair
                default: Menu(); break;
            }

            ReadKey();
        }

        static void Menu()
        {
            Clear();
            WriteLine("Qual operação deseja: ");
            WriteLine("1 - Listar Nomes");
            WriteLine("0 - Sair");


        }

    }

}
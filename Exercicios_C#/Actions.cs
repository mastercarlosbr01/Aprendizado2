using static System.Console;

namespace Calculator{
    class Action{
         public static void AnteSuce()
        {
            WriteLine("ANTECESSOR E SUCESSOR");
            Write("Digite seu numero e descubra se ele é antecessor ou sucessor: ");
            float num01 = float.Parse(ReadLine());
            WriteLine($"O antecessor de {num01} é = {num01 - 1}");
            WriteLine($"O seu sucessor de {num01} é = {num01 + 1}");
            Thread.Sleep(1000);
            ReadKey();
            Program.Menu();
            
        }
         public static void DobroTriRaiz()
        {
            WriteLine("DOBRO, TRIPLO, RAIZ QUADRADA");
            WriteLine("Digite um numero e veja qual seu dobro, triplo e raiz quadrada: ");
            double num02 = double.Parse(ReadLine());
            WriteLine($"O dobro é {Math.Pow(num02, 2)}, triplo {Math.Pow(num02, 3)} e Raiz quadrada {Math.Sqrt(num02).ToString(".")}");
            Thread.Sleep(1000);
            ReadKey();
            Program.Menu();
        }
        public static void Tabuada()
        {
            WriteLine("Tabuada");
            Write("Digite um numero para calcular");
            int num01 = int.Parse(ReadLine());
            for (int i = 0; i <= 10; i++)
            {
                WriteLine($"{i} x {num01} = {(num01 * i)}");
            };
            Thread.Sleep(1000);
            ReadKey();
            Program.Menu();
        }
        static void Sonho1(){
            // quando lembrar irei fazer
        }
    }
}
using System;
using static System.Console;

namespace Loop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Clear();
            int a = 1;


            // do while faz a operação primeiro e depois faz a verificação
            WriteLine("\n\ndo while");
            do
            {

                WriteLine(a);
                a++;

            } while (a <= 10);

            a = 0;
            WriteLine("\n\nwhile");

            while (a <= 10)
            {
                WriteLine(a);
                a++;
            }

            WriteLine("\n\nFOR");

            for (int i = 0; i < 10; i++)
            {
                WriteLine(i);
            }


            //foreach no array, ele é mais fácl é mais pratico de acessar o array. Olhe a diferença de escrita e ainda ficar pensando em colocar na posição do indice 
            WriteLine("\n\nforeach no array");
            int[] array = { 1, 2, 3, 45, 56, 45645, 565 };

            foreach (int i in array)
            {
                WriteLine(i);
            }

            for (int i = 0; i < array.Length; i++) 
            {
                WriteLine(array[i]);
            }


            WriteLine("\n\nEntrando dentro da função");
            looping(1);
        }

        public static void looping (int a) 
        {
            WriteLine(a);

            if (a < 5) 
            {
                looping(a++);
            }
        }
    }
}

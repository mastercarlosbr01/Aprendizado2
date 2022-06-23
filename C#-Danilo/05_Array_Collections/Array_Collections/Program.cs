using System;
using System.Collections.Generic;
using static System.Console;


namespace Array_Collections
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //            Array

            //tipo[] a = new tipo[3];

            //            No caso estou criando um array contendo 3 posições / espaços.

            //Vou instanciar elas:

            //            a[1]

            //O numero dentro dos[] quer dizer o indice.


            //Collections

            //List<tipo> A = new List<tipo>();
            //            ou
            //            Var A = new List<tipo>();

            //            Estou criando uma nova instancia desta coleção.Ele é diferente de um array por questão de só criar um espaço na memoria caso eu crie algo.
            //Isso evitar colocar mais espaços na memoria e tornando mais rapido a aplicação.

            //Adicionando item na collectio = A.ADD(1);
            //            Ver o tamanho = A.count();

            Clear();

            string[] arr = new string[3]; //estatica
            var arr2 = new string[5]; //dinamica

            arr[0] = "Carlão1";
            arr[1] = "Carlão2";
            arr[2] = "Carlão3";

            Array.Sort(arr); // ordenando o array por ordem ascendente 

            foreach (string valor in arr)
            {
                WriteLine(valor);
            }


            // Collections --  você tem mais metodo é pode até em transformar em array 

            List<string> collect = new List<string>();
            collect.Add("Ronaldo");
            collect.Add("Zina");
            collect.Add("Brasil");

            foreach (string item in collect)
                WriteLine(item);

            int tamanhaoCollectiuon = collect.Count;
            WriteLine(tamanhaoCollectiuon);

            collect.ToArray(); // transformar em array


            // para usar o Existis precisa desta sintaxe
            if (collect.Exists(e => e == "Ronaldo")) 
            {
                WriteLine("Encontrou o Ronaldo dentro da Collection");
            }
            

            Read();

        }
    }
}

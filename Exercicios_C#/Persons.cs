using System;
using static System.Console;
using System.Threading;


namespace Calculator
{
    public class Person
    {

        public string NameInit { get; set; }
        public string FinalName { get; set; }
        public int Idade
        {
            get
            {
                return Idade;
            }
            set
            {
                if (Idade > 18)
                {
                    Console.WriteLine("Você já é de maior!!!");
                    Thread.Sleep(1000);
                    Clear();
                }
                else
                {
                    Console.WriteLine("Você é de menor viado!!!");
                    Thread.Sleep(1000);
                    Clear();
                }
            }
        }
        private string CPF;
        public void ExibirMensagem()
        {
            Console.WriteLine(this.CPF);
        }
        public string getCPF()
        {
            return this.CPF;
        }
        public void setCPF(string cpf)
        {
            if (this.CPF == null || this.CPF == ""){
                WriteLine("Não tem CPF");
            }

            this.CPF = cpf.ToUpper();
        }




    }
}
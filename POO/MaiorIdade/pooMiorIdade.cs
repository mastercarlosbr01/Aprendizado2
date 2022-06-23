using static System.Console;


namespace MaiorIdade
{
    public class Pessoa
    {

        public Pessoa()
        {
            this.Nome = "";
            this.Idade = 0;
        }

        public Pessoa(String nome, int idade)
        {
            this.Nome = nome;
            this.Idade = idade;
        }
        private String nome;
        public String Nome
        {
            get { return nome; }
            set { nome = value.ToUpper(); }
        }

        private int idade;
        public int Idade
        {
            get
            {
                return this.idade;
            }
            set
            {
                if (value >= 0)
                {
                    this.idade = value;
                }
                else
                {
                    this.idade = 0;
                }
            }
        }

        public void MostrarDados()
        {
            WriteLine($"Nome: {this.Nome}");
            WriteLine($"Idade: {this.Idade}");
        }

        public void MostrarDados(Boolean formatado)
        {
            if (formatado == true)
            {
                WriteLine($"Nome: {this.Nome}");
                WriteLine($"Idade: {this.Idade}");
                WriteLine("Formatadão meu rei");
            }
            else
            {
                WriteLine($"Nome: {this.Nome}");
                WriteLine($"Idade: {this.Idade}");
            }

        }

        public void MostrarDadosIguais(Boolean opcao)
        {
            if (opcao == true)
            {
                WriteLine("São todos Iguais gauchosss tchê");
            }
        }
    }

    // metodos

}


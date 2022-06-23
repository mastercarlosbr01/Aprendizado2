namespace Calculator_Age
{
    public class Pessoa
    {
        public Pessoa()
        {
            
        }
        public  Pessoa (String nom, int anoNasc){
            this.Nome = nom;
            this.AnoNascimento = anoNasc;
        }
        private int anoNascimento;
        public int AnoNascimento
        {
            get { return this.anoNascimento; }
            set { this.anoNascimento = value; }
        }

        private String nome;
        public String Nome
        {
            get { return this.nome; }
            set { this.nome = value.ToUpper(); }
        }

        // Vamos melhorar

        private int idade;
        public int Idade
        {
            get { 
                this.CalcularIdade();
                return this.idade; }
        }
        
        private void CalcularIdade()
        {
            DateTime data = DateTime.Now;
             int ano  = data.Year;
             this.idade = ano - this.AnoNascimento;
        }

        public void ExibirDados()
        {
            Console.WriteLine("******************************************");
            Console.WriteLine($"Nome: {this.Nome}");
            Console.WriteLine($"Ano de nascimento: {this.AnoNascimento}");
            Console.WriteLine($"Idade: {this.Idade}");
            Console.WriteLine("******************************************");
        }


    }
}
namespace MaiorIdade
{
    public class Names
    {
        public Names()
        {
            this.inicializaLista();
        }
        private List<Pessoa> pessoas;
        public List<Pessoa> Pessoas
        {
            get { return pessoas; }
        }

        private void inicializaLista()
        {
            // Instanciar a lista 
            this.pessoas = new List<Pessoa>();
            Pessoa p = new Pessoa("Carlos", 30);
            this.pessoas.Add(p);

            p = new Pessoa("Henrique", 59); // nem preciso instanciar novamente, posso pegar a nova variavel
            this.pessoas.Add(p);

            for (int i = 0; i < 10; i++)
            {
                p = new Pessoa($"Henrique{i}", 59 + i);
                this.pessoas.Add(p);
            }
        }

        public void ListarNomes()
        {

            for (int i = 0; i < this.Pessoas.Count; i++)
            {       
                this.Pessoas[i].MostrarDados();
                    // Pessoa p = this.pessoas[i];
                    // p.MostrarDados();
            }
        }
    }
}
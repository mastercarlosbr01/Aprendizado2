namespace PooPerguntaEResposta
{
    public class Perguntas
    {
        public String TesteA;
        private String testeB;
        protected String TesteC;
        public Perguntas()
        {
            this.Texto = "";
            this.Pergunta= "";
        }
        public Perguntas(string pergunta, string texto)
        {
            this.Texto = texto;
            this.Pergunta= pergunta;
        }
        public String Texto { get; set; }
        public String Pergunta { get; set; }
    }
}
        
    

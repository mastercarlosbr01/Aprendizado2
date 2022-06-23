using System;
using static System.Console;
using System.Threading;


namespace pooMensagem
{
    public class Mensagem
    {
        // private String TextoMensagem;


        // public String GetTextMensage() {
        //     return this.TextoMensagem;
        // }
        // public void SetTextMensage(String valor) {
        //     this.TextoMensagem = valor.ToUpper();
        // }

        private String textoMensagem;
        public String TextoMensagem
        {
            get
            {
                return this.textoMensagem;
            }
            set
            {
                this.textoMensagem = value.ToUpper();
            }
        }

        public void ExibirMensagem()
        {
            WriteLine(this.TextoMensagem);

        }
    }
}
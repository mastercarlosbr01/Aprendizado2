namespace Animais
{
    public class Animal
    {
        private String _nome;
        public String Nome
        {
            get { return _nome; }
            set { _nome = value.ToUpper(); }
        }

        private String _tipo;
        public String Tipo
        { // valor padrão peixe
            get { return _tipo; }
            set
            {
                if (value == "Cachorro" || value == "Gato" || value == "Peixe")
                {
                    _tipo = value;
                }
                else
                {
                    _tipo = "Peixe";
                }
            }
        }


    }
}
namespace AreaRetangulo
{
    public class Retangulo
    {
        public Retangulo()
        {

        }

        //base do retangulo
        private Double baseRet;
        public Double Base
        {
            get { return baseRet; }
            set
            {
                if (value >= 0)
                {
                    baseRet = value;
                }
                else
                {
                    baseRet = 0;
                }
            }
        }

        // Altura do retangulo
        private Double altret;
        public Double Altura
        {
            get { return altret; }
            set
            {
                if (value >= 0)
                {
                    altret = value;
                }else {
                    altret = 0;
                }


            }
        }

        // Area do retangulo
        public Double Area
        {
            get { return altret * baseRet; }
        }
        
        public void ExibirCalculo () 
        {
            Console.WriteLine($"Base: {this.Base}");
            Console.WriteLine($"Altura: {this.Altura}");
            Console.WriteLine($"Area: {this.Area}");

        }



    }
}
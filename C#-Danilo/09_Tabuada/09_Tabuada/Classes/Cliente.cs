using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Text;

namespace Classes
{
    public class Cliente
    {
        /// <summary>
        /// Contrutor default
        /// </summary>
        public Cliente() {
            this.Nome = "Carlos";
            this.Telefone = "35 9 8811-9443";
            this.CPF = "111 111 111 11";
        }
        /// <summary>
        /// Construtor da Classe com todos os parametros
        /// </summary>
        /// <param name="nome">Nome</param>
        /// <param name="telefone">Telefone</param>
        /// <param name="cpf">CPF</param>
        public Cliente(string nome, string telefone, string cpf)
        {
            this.Nome = nome;
            this.Telefone = telefone;
            this.CPF = cpf;
        }
        /// <summary>
        /// Construtor com assinatura diferente, então posso usar 
        /// </summary>
        /// <param name="telefone"></param>
        public Cliente(int telefone, int cpf) {
            this.Telefone = telefone.ToString();
            this.CPF = cpf.ToString();
        }

        public string Nome;
        public string Telefone;
        public string CPF;

        private static string caminhoBaseClientes() 
        {
            return ConfigurationManager.AppSettings["BaseClientes"];
        }

        public void Gravar()
        {
            var clientes = Cliente.LerClientes();
            clientes.Add(this);

            if (File.Exists(caminhoBaseClientes()))
            {
                StreamWriter r = new StreamWriter(caminhoBaseClientes());
                r.WriteLine("nome; telefone; CPF;");
                foreach (Cliente c in clientes)
                {
                    var linha = c.Nome + ";" + c.Telefone + ";" + c.CPF + ";";
                    r.WriteLine(linha);
                }

                r.Close();
            }
        }
        public static List<Cliente> LerClientes() 
        {
            var clientes = new List<Cliente>();

            if (File.Exists(caminhoBaseClientes())){
                using (StreamReader arquivo = File.OpenText(caminhoBaseClientes()))
                {
                    string linha;
                    int i = 0;
                    while ((linha = arquivo.ReadLine()) != null)
                    {
                        i++;
                        if (i == 1) continue;
                        var clienteArquivo = linha.Split(';');
                        var cliente = new Cliente(clienteArquivo[0], clienteArquivo[1], clienteArquivo[2]);
                        clientes.Add(cliente);
                    }
                }
            }
            return clientes;
        }
    }
}

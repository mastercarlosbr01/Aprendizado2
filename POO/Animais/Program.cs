// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Animais.Animal a1 = new Animais.Animal();
Animais.Animal a2 = new Animais.Animal();
Animais.Animal a3 = new Animais.Animal();
Animais.Animal a4 = new Animais.Animal();
int tlCachorro = 0, tlGato = 0, tlPeixe = 0;

Console.Clear();

Console.WriteLine(" Controle de animais: ");

Console.Write("Informe o nome do 1º animal:");
a1.Nome = Console.ReadLine();
Console.WriteLine("Informe o tipo do 1º animal (Cachorro, Gato ou Peixer)");
Console.Write("Digite: ");
a1.Tipo = Console.ReadLine();

if (a1.Tipo == "Cachorro") tlCachorro++;
if (a1.Tipo == "Gato") tlGato++;
if (a1.Tipo == "Peixe") tlPeixe++;

Console.Write("Informe o nome do 2º animal:");
a2.Nome = Console.ReadLine();
Console.WriteLine("Informe o tipo do 2º animal (Cachorro, Gato ou Peixer)");
Console.Write("Digite: ");
a2.Tipo = Console.ReadLine();

if (a2.Tipo == "Cachorro") tlCachorro++;
if (a2.Tipo == "Gato") tlGato++;
if (a2.Tipo == "Peixe") tlPeixe++;

Console.Write("Informe o nome do 3º animal:");
a3.Nome = Console.ReadLine();
Console.WriteLine("Informe o tipo do 3º animal (Cachorro, Gato ou Peixer)");
Console.Write("Digite: ");
a3.Tipo = Console.ReadLine();

if (a3.Tipo == "Cachorro") tlCachorro++;
if (a3.Tipo == "Gato") tlGato++;
if (a3.Tipo == "Peixe") tlPeixe++;

Console.Write("Informe o nome do 4º animal:");
a4.Nome = Console.ReadLine();
Console.WriteLine("Informe o tipo do 4º animal (Cachorro, Gato ou Peixer)");
Console.Write("Digite: ");
a4.Tipo = Console.ReadLine();

if (a4.Tipo == "Cachorro") tlCachorro++;
if (a4.Tipo == "Gato") tlGato++;
if (a4.Tipo == "Peixe") tlPeixe++;



Console.WriteLine("\n\nResultado:\n\n");

Console.WriteLine($"Cachorro: {tlCachorro}");
Console.WriteLine($"Gato: {tlGato}");
Console.WriteLine($"Peixe: {tlPeixe}");

Console.ReadKey();

using Servicios;
using Negocio;
using UI.Consola;

System.Console.WriteLine("> Inicio Mascotas");

var repositorio = new RepositorioCSV();
var sistema = new GestorDeMascotas(repositorio);
var vista = new View();
var controlador = new Controlador(sistema, vista);

controlador.Run();

System.Console.WriteLine("> Mascotas finalizada");




using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Globalization;

namespace Ejercicio_6
{
    using Servicios;
    using UI;
    using Principal;

    class Program
    {
        static void Main(string[] args)
        {
            RepositorioCSV repositorio = new RepositorioCSV();
            Sistema sistema = new Principal.Sistema(repositorio);
            Vista vista = new Vista();
            Controlador controlador = new Controlador(vista, sistema);
            controlador.Run();
        }
    }
}

namespace Principal
{
    public class Sistema
    {
        Servicios.IRepositorio iRepositorio;
        public List<Alumno> Alumnos;
        public Sistema(Servicios.IRepositorio repositorio)
        {
            iRepositorio = repositorio;
            iRepositorio.Inicializar();
            Alumnos = iRepositorio.ObtenerNotas();
            foreach(Alumno alumno in Alumnos){
                Console.WriteLine("Alumnos: " + alumno);
            }
        }

        decimal media;
        decimal porcentajeAprobados;
        int aprobados;

        public decimal CalcularMedia()
        {
            foreach (Alumno alumno in Alumnos)
            {
                media += alumno.Nota;
            }
            return media / Alumnos.Count;
        }

        public decimal CalcularPorcentajeAprobados()
        {
            int apr = CalcularAprobados();
            porcentajeAprobados = apr * 100M / Alumnos.Count;
            return porcentajeAprobados;
        }

        public int CalcularAprobados()
        {
            aprobados = 0;
            foreach (Alumno alumno in Alumnos)
            {
                if (alumno.Nota >= 5)
                {
                    aprobados++;
                }
            }
            return aprobados;
        }

    }
}

namespace UI
{
    using Principal;
    public class Controlador
    {
        public int Ejercicio;
        Vista vista;
        Sistema sistema;

        public Controlador(Vista vista, Sistema sistema)
        {
            this.vista = vista;
            this.sistema = sistema;
        }
        public void Run()
        {
            int eleccion;

            do
            {
                vista.MostrarOpciones();
                eleccion = SolicitarOpcion();
                EjecutarOpcion(eleccion);
                Console.WriteLine("Pulse una tecla para continuar");
                Console.ReadKey();
            }
            while (eleccion != 0);

            Console.WriteLine("Fin del programa");
        }

        private int SolicitarOpcion()
        {
            var tempString = "";
            var tempInt = 0;
            bool success = false;

            Console.WriteLine("Selecciona una opción metiendo su número: ");
            tempString = Console.ReadLine();
            success = int.TryParse(tempString, out tempInt);

            // Continue asking for integer while it's not an integer 
            // or it's smaller than 0 or bigger than options are in the example
            while (!success || tempInt < 0 || tempInt > vista.Opciones.Length)
            {
                Console.WriteLine("Selecciona una opción metiendo su número: ");
                tempString = Console.ReadLine();
                success = int.TryParse(tempString, out tempInt);
            }
            return tempInt;
        }

        private void EjecutarOpcion(int eleccion)
        {
            // Alumno[] alumnos = new Alumno[]{
            //     new Alumno("Luis", 'H', 7.5M),
            //     new Alumno("Marta", 'M', 4M),
            //     new Alumno("Marcos", 'H', 6M),
            //     new Alumno("Aroa", 'M', 5M),
            //     new Alumno("Nerea", 'M', 4M),
            //     new Alumno("Kike", 'H', 6.5M),
            //     new Alumno("Juan", 'H', 7.5M),
            // };

            switch (eleccion)
            {
                case 1:
                    vista.MostrarAlumnos(sistema.Alumnos);
                    break;
                case 2:
                    decimal media = sistema.CalcularMedia();
                    vista.MostrarMedia(media);
                    break;
                case 3:
                    decimal porcentajeAprobados = sistema.CalcularPorcentajeAprobados();
                    vista.MostrarAprobados(porcentajeAprobados);
                    break;
            }
        }
    }

    public class Vista
    {
        public string[] Opciones = { "1. Ver datos", "2. Ver media", "3. Ver aprobados" };
        public void MostrarOpciones()
        {
            foreach (string opcion in Opciones)
                Console.WriteLine(opcion);
            Console.WriteLine("0. Salir del programa");
        }

        public void MostrarAlumnos(List<Alumno> alumnos)
        {
            foreach (Alumno alumno in alumnos)
            {
                Console.WriteLine("Nombre: " + alumno.Nombre + " Nota: " + alumno.Nota.ToString());
            }
        }

        public void MostrarMedia(decimal media)
        {
            Console.WriteLine("La media es: " + media.ToString());
        }

        public void MostrarAprobados(decimal porcentajeAprobados)
        {
            Console.WriteLine("El porcentaje de aprobados es: " + porcentajeAprobados.ToString());
        }

    }

}

namespace Servicios
{
    public interface IRepositorio
    {
        void Inicializar();
        List<Alumno> ObtenerNotas();

    }

    public class RepositorioCSV : IRepositorio
    {
        string data;
        void IRepositorio.Inicializar()
        {
            this.data = "notas.csv";
        }
        List<Alumno> IRepositorio.ObtenerNotas()
        {
            return File.ReadAllLines(data)
                .Skip(1)
                .Where(row => row.Length > 0)
                .Select(Alumno.ParseRow).ToList();
        }
    }
}


public class Alumno
{
    public string Nombre;
    public decimal Nota;

    public Alumno(string n, decimal q)
    {
        Nombre = n;
        Nota = q;
    }

    public static Alumno ParseRow(string row)
    {
        NumberFormatInfo nfi = new CultureInfo("en-US", false).NumberFormat;

        //Console.WriteLine(row);
        var columns = row.Split(',');
        return new Alumno(columns[0], decimal.Parse(columns[1], nfi));
    }
}
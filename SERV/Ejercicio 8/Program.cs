using System;

namespace Ejercicio_6
{

    class Program
    {
        static void Main(string[] args)
        {
            Controlador controlador = new Controlador();
            controlador.Run();
        }
    }
}

class Sistema
{
    public Sistema(Alumno[] alumnos)
    {
        Alumnos = alumnos;
        media = 0;
    }

    Alumno[] Alumnos;
    decimal media;
    decimal porcentajeAprobados;
    int aprobados;

    public decimal CalcularMedia()
    {
        foreach (Alumno alumno in Alumnos)
        {
            media += alumno.Nota;
        }
        return media / Alumnos.Length;
    }

    public decimal CalcularPorcentajeAprobados()
    {
        int apr = CalcularAprobados();
        porcentajeAprobados = apr * 100M / Alumnos.Length;
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

public class Vista
{
    public string[] Opciones = { "1. Ver datos", "2. Ver media", "3. Ver aprobados" };
    public void MostrarOpciones()
    {
        foreach (string opcion in Opciones)
            Console.WriteLine(opcion);
        Console.WriteLine("0. Salir del programa");
    }

    public void MostrarAlumnos(Alumno[] alumnos)
    {
        foreach (Alumno alumno in alumnos)
        {
            Console.WriteLine("Nombre: " + alumno.Nombre + " Genero: " + alumno.Genero + " Nota: " + alumno.Nota.ToString());
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

public class Controlador
{
    public int Ejercicio;
    Vista vista = new Vista();

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
        Alumno[] alumnos = new Alumno[]{
            new Alumno("Luis", 'H', 7.5M),
            new Alumno("Marta", 'M', 4M),
            new Alumno("Marcos", 'H', 6M),
            new Alumno("Aroa", 'M', 5M),
            new Alumno("Nerea", 'M', 4M),
            new Alumno("Kike", 'H', 6.5M),
            new Alumno("Juan", 'H', 7.5M),
        };
        Sistema sistema = new Sistema(alumnos);

        switch (eleccion)
        {
            case 1:
                vista.MostrarAlumnos(alumnos);
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

public class Alumno
{
    public string Nombre;
    public char Genero;
    public decimal Nota;

    public Alumno(string n, char g, decimal q)
    {
        Nombre = n;
        Genero = g;
        Nota = q;
    }
}
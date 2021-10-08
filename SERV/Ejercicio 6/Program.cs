using System;

namespace Ejercicio_6
{
    class Program
    {
        static void Main(string[] args)
        {
            int intTemp = 0;

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

            do
            {
                Console.Clear();
                Console.WriteLine("¿Qué quieres calcular?\n1. Media\n2. Cantidad de aprobados\n3. Porcentaje de aprobados\n0. Salir");
                intTemp = Convert.ToInt32(Console.ReadLine());
                switch (intTemp)
                {
                    case 0:
                        break;
                    case 1:
                        Console.WriteLine("La media es: " + sistema.getMedia().ToString());
                        break;
                    case 2:
                        Console.WriteLine("Cantidad de aprobados: " + sistema.calcularAprobados().ToString());
                        break;
                    case 3:
                        Console.WriteLine("Porcentaje de aprobados: " + sistema.calcularPorcentajeAprobados().ToString());
                        break;
                    default:
                        Console.WriteLine("Escribe un número válido");
                        break;
                }
                Console.WriteLine("Pulsa cualquier tecla para continuar");
                Console.ReadKey();
            } while (intTemp != 0);


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

    public decimal getMedia()
    {
        foreach (Alumno alumno in Alumnos)
        {
            media += alumno.Nota;
        }
        return media / Alumnos.Length;
    }

    public decimal calcularPorcentajeAprobados()
    {
        int apr = calcularAprobados();
        porcentajeAprobados = apr * 100M / Alumnos.Length;
        return porcentajeAprobados;
    }

    public int calcularAprobados()
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
using System;
using System.Collections.Generic;

var notas = new[] { 7.1M, 4, 6, 5, 4, 6.5M, 7 };
int index;
decimal media;
int aprobados;

Console.WriteLine("Escoge el ejercicio a hacer: ");
Console.WriteLine("1. Con goto: ");
Console.WriteLine("2. Con for: ");
Console.WriteLine("3. Con funciones void: ");
Console.WriteLine("4. Con funciones return: ");
Console.WriteLine("5. Ver las distintas estructuras");
int intTemp = Convert.ToInt32(Console.ReadLine());



switch (intTemp)
{
    case 1:
        {
            index = 0;
            media = 0.0M;
            aprobados = 0;
            Console.WriteLine("--------- BEGINNING OF THE PROGRAM ---------");
        /* Calcular media sin funciones*/
        calcular:
            media += notas[index];
            if (notas[index] >= 5)
                aprobados++;
            index++;

            if (index < notas.Length)
                goto calcular;

            // Calcular media y mostrarla
            media = media / notas.Length;
            Console.WriteLine("Media: " + media);
            Console.WriteLine("Aprobados: " + aprobados);
            Console.WriteLine("Porcentaje de aprobados: " + 100M / notas.Length * aprobados);

            Console.WriteLine("------------ END OF THE PROGRAM ------------");
            break;
        }
    case 2:
        {
            media = 0.0M;
            aprobados = 0;
            Console.WriteLine("--------- BEGINNING OF THE PROGRAM ---------");
            /* Calcular media sin funciones*/
            for (int i = 0; i < notas.Length; i++)
            {
                media += notas[i];
                if (notas[i] >= 5)
                    aprobados++;
            }

            // Calcular media y mostrarla
            media = media / notas.Length;
            Console.WriteLine("Media: " + media);
            Console.WriteLine("Aprobados: " + aprobados);
            Console.WriteLine("Porcentaje de aprobados: " + 100M / notas.Length * aprobados);

            Console.WriteLine("------------ END OF THE PROGRAM ------------");
            break;
        }
    case 3:
        {
            Inicializar();
            while (index < notas.Length) Calcular();
            Mostrar();

            void Inicializar()
            {
                index = 0;
                aprobados = 0;
            }

            void Calcular()
            {
                if (notas[index] >= 5)
                    aprobados++;
                index++;
            }

            void Mostrar()
            {
                Console.WriteLine("Aprobados: " + aprobados);
                Console.WriteLine("Porcentaje de aprobados: " + 100M / notas.Length * aprobados);
            }

            break;
        }
    case 4:
        {
            Inicializar2();
            int ap = Calcular2(notas);
            Mostrar2(ap);

            void Inicializar2()
            {
                index = 0;
            }

            int Calcular2(decimal[] notas)
            {
                int aprobados = 0;
                while (index < notas.Length)
                {
                    if (notas[index] >= 5)
                        aprobados++;
                    index++;
                }
                return aprobados;
            }

            void Mostrar2(int aprobados)
            {
                Console.WriteLine("Aprobados: " + aprobados);
                Console.WriteLine("Porcentaje de aprobados: " + 100M / notas.Length * aprobados);
            }
            break;
        }
    case 5:
        {
            media = 0;
            Console.WriteLine("\nTuplas/Tuples: ");
            // Tupla
            Tuple<string, char, decimal>[] tuplaAlumnos = {
                Tuple.Create("Luis", 'H', 7.5M),
                Tuple.Create("Marta", 'M', 4M),
                Tuple.Create("Marcos", 'M', 5M),
            };
            for (int i = 0; i < tuplaAlumnos.Length; i++)
            {
                media += tuplaAlumnos[i].Item3;
                Console.WriteLine("Nombre de estudiante: " + tuplaAlumnos[i].Item1 + " género: " + tuplaAlumnos[i].Item2 + " nota de estudiante: " + tuplaAlumnos[i].Item3);
            }
            Console.WriteLine("Media: " + media / tuplaAlumnos.Length);

            // Struct
            media = 0;
            Console.WriteLine("\nStructuras/Structs: ");
            structAlumno[] structAlumnos = new structAlumno[] {
                new structAlumno("Luis", 'H', 4.5M),
                new structAlumno("Yasmin", 'H', 7.5M),
                new structAlumno("Juan", 'H', 9.5M) };

            for (int i = 0; i < structAlumnos.Length; i++)
            {
                media += structAlumnos[i].Qualification;
                Console.WriteLine("Nombre de estudiante: " + structAlumnos[i].Name + " género: " + structAlumnos[i].Genre + " nota de estudiante: " + structAlumnos[i].Qualification);
            }
            Console.WriteLine("Media: " + media / structAlumnos.Length);

            // Record
            media = 0;
            Console.WriteLine("\nRegistros/Records: ");

            recAlumno[] recAlumnos = new recAlumno[] {
                new recAlumno("Jon", 'H', 8M),
                new recAlumno("Yaisa", 'M', 7.5M),
                new recAlumno("Paula", 'M', 8.5M)
            };

            for (int i = 0; i < recAlumnos.Length; i++)
            {
                media += recAlumnos[i].Nota;
                Console.WriteLine("Nombre de estudiante: " + recAlumnos[i].Nombre + " género: " + recAlumnos[i].Genero + " nota de estudiante: " + recAlumnos[i].Nota);
            }
            Console.WriteLine("Media: " + media / recAlumnos.Length);

            // Clases
            media = 0;
            Console.WriteLine("\nClases/Classes:");

            Alumno[] classAlumnos = new Alumno[]{
                new Alumno("Maider", 'M', 8M),
                new Alumno("Txema", 'H', 7.5M),
                new Alumno("Andoitz", 'H', 9.5M),
            };

            for (int i = 0; i < classAlumnos.Length; i++)
            {
                media += classAlumnos[i].Nota;
                Console.WriteLine("Nombre de estudiante: " + classAlumnos[i].Nombre + " género: " + classAlumnos[i].Genero + " nota de estudiante: " + classAlumnos[i].Nota);
            }
            Console.WriteLine("Media: " + media / classAlumnos.Length);

            // Diccionarios
            media = 0;
            Console.WriteLine("\nDiccionarios/Dictionaries:");

            Dictionary<int, Alumno> diccAlumnos = new Dictionary<int, Alumno>();
            diccAlumnos.Add(1, new Alumno("Unai", 'H', 8.5M));
            diccAlumnos.Add(2, new Alumno("Javi", 'H', 8M));
            diccAlumnos.Add(3, new Alumno("Asier", 'H', 9M));

            for (int i = 1; i <= diccAlumnos.Count; i++)
            {
                media += diccAlumnos[i].Nota;
                Console.WriteLine("Nombre de estudiante: " + diccAlumnos[i].Nombre + " género: " + diccAlumnos[i].Genero + " nota de estudiante: " + diccAlumnos[i].Nota);
            }
            Console.WriteLine("Media: " + media / diccAlumnos.Count);
            break;
        }
    default:
        {
            Console.WriteLine("Selecciona un ejercicio");
            break;
        }
}

public record recAlumno(string Nombre, char Genero, decimal Nota);

public struct structAlumno
{
    public structAlumno(string name, char genre, decimal qualification)
    {
        Name = name;
        Genre = genre;
        Qualification = qualification;
    }
    public string Name { get; }
    public char Genre { get; }
    public decimal Qualification { get; }
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


using System;

namespace Ejercicio_2
{
    class Program
    {
        static void Main(string[] args)
        {
            var notas = new[] { 7.1M, 4, 6, 5, 4, 6.5M, 7 };
            decimal media;
            int aprobados;

            media = 0.0M;
            aprobados = 0;
            Console.WriteLine("--------- BEGINNING OF THE PROGRAM ---------");
            /* Calcular media sin funciones*/
            for(int i = 0; i < notas.Length; i ++){
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
        }
    }
}

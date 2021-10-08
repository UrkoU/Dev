using System;

namespace Ejercicio_4
{
    class Program
    {
        static void Main(string[] args)
        {
            var notas = new[] { 7.1M, 4, 6, 5, 4, 6.5M, 7 };
            int index;

            Inicializar();
            int ap = CalcularAprobados(notas);
            Mostrar(ap);

            void Inicializar()
            {
                index = 0;
            }

            int CalcularAprobados(decimal[] notas)
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

            void Mostrar(int aprobados)
            {
                Console.WriteLine("Aprobados: " + aprobados);
                Console.WriteLine("Porcentaje de aprobados: " + 100M / notas.Length * aprobados);
            }
        }
    }
}

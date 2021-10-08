using System;

namespace Ejercicio_3
{
    class Program
    {
        static void Main(string[] args)
        {
            var notas = new[] { 7.1M, 4, 6, 5, 4, 6.5M, 7 };
            int index;
            int aprobados;


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
        }
    }
}

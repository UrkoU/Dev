using System;
using System.Collections.Generic;
using System.Linq;

namespace TokyoKyoto
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] ciudades = { "Tokyo", "London", "Rome", "Donlon", "Kyoto", "Paris", "Rispa" };
            Dictionary<string, string[]> nuevasCiudades = new Dictionary<string, string[]>();
            // List<string[]> nuevasCiudades = new List<string[]>();
            List<string> viejasCiudades = new List<string>();
            List<string> filaCiudad;
            foreach (string ciudad in ciudades)
            {
                filaCiudad = new List<string>();
                filaCiudad.Add(ciudad);
                string ciudadX2 = ciudad + ciudad;
                foreach (string ciudadComparar in ciudades)
                    if (ciudadComparar != ciudad)
                        if (ciudadX2.ToLower().Contains(ciudadComparar.ToLower()))
                            filaCiudad.Add(ciudadComparar);
                string[] cs = filaCiudad.ToArray();
                nuevasCiudades.Add(cs[0], cs);
            }

            // Mostrar
            Console.WriteLine("Nuevo array de ciudades\n");
            foreach (string[] entradaCiudades in nuevasCiudades.Values)
            {
                for (int i = 0; i < entradaCiudades.Length; i++)
                    Console.WriteLine(entradaCiudades[i].ToString());
                Console.WriteLine();
            }
        }
    }
}

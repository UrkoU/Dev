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
            string ciudadCambiada = "";
            List<string[]> nuevasCiudades = new List<string[]>();
            List<string> viejasCiudades = new List<string>();
            List<string> filaCiudad;
            foreach (string ciudad in ciudades)
            {
                filaCiudad = new List<string>();
                filaCiudad.Add(ciudad);

                for (int i = 1; i < ciudad.Length; i++)
                {
                    ciudadCambiada = "";
                    for (int j = i; j < ciudad.Length; j++)
                    {
                        ciudadCambiada += ciudad[j];
                    }
                    for (int j = 0; j < i; j++)
                    {
                        ciudadCambiada += ciudad[j];
                    }
                    // Comparar
                    //Console.WriteLine("Ciudad: " + ciudad + " Ciudad cambiada: " + ciudadCambiada);
                    foreach (string c in ciudades)
                    {
                        if (c.ToLower() == ciudadCambiada.ToLower())
                        {
                            if (viejasCiudades.Contains(c.ToLower()))
                            {
                                Console.WriteLine("C: " + c);
                            }
                            filaCiudad.Add(c.ToLower());
                            viejasCiudades.Add(c.ToLower());
                        }
                    }
                }

                foreach (var item in viejasCiudades)
                {
                    Console.WriteLine(item);
                }
                Console.WriteLine();

                string[] cs = filaCiudad.ToArray();

                nuevasCiudades.Add(cs);
            }
            Console.WriteLine("Nuevo array de ciudades\n\n");
            // Mostrar
            for (int i = 0; i < nuevasCiudades.Count; i++)
            {
                for (int j = 0; j < nuevasCiudades[i].Length; j++)
                {
                    Console.WriteLine(nuevasCiudades[i][j].ToString());
                }
                Console.WriteLine();
            }
        }
    }
}

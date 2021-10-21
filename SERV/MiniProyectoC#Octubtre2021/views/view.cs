using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;


namespace UI.Consola
{
    using System;

    public class View
    {
        const string CANCELINPUT = "fin";
        const string INDENT = "   ";
        public void LimpiarPantalla() => Console.Clear();
        public void MuestraLineYEsperaReturn(Object msg)
        {
            Console.Write(INDENT + msg.ToString()+" ");
            Console.ReadLine();
        }
        public void MuestraMensaje(Object msg) => Console.WriteLine(INDENT + msg.ToString());
        public void MuestraTitulo(String msg)  {
            ConsoleColor dftForeColor = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"{INDENT}= {msg} =");
            Console.ForegroundColor = dftForeColor;
        }
        public void MuestraError(String msg)
        {
            ConsoleColor dftForeColor = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"{INDENT}{msg}");
            Console.ForegroundColor = dftForeColor;
        }
        public void MuestraPrompt(String msg)  {
            ConsoleColor dftForeColor = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.Blue;
            Console.Write($"{INDENT}{msg}: ");
            Console.ForegroundColor = dftForeColor;
        }
        // c# Generics
        public T TryObtenerEntradaDeTipo<T>(string prompt)
        {
            while (true)
            {
                MuestraPrompt(prompt.Trim());
                var input = Console.ReadLine();
                // c# throw new Exception: Lanzamos una Excepción para indicar que el usuario ha cancelado la entrada
                if (input.ToLower().Trim() == CANCELINPUT) throw new Exception("Entrada cancelada por el usuario");
                try
                {
                    // c# Reflexion
                    // https://stackoverflow.com/questions/2961656/generic-tryparse?rq=1
                    var valor = TypeDescriptor.GetConverter(typeof(T)).ConvertFromString(input);
                    return (T)valor;
                }
                catch (Exception e)
                {
                    //Console.WriteLine($"{INDENT}Error: {input} no reconocido como: {typeof(T).ToString()}");
                    if(input!="")MuestraError($"Error: '{input}' no reconocido como entrada permitida");
                }
            }
        }
        public void MostrarListaEnumerada<T>(string titulo, List<T> valores)
        {
            MuestraTitulo(titulo);
            Console.WriteLine();
            for (int i = 0; i < valores.Count; i++)
            {
                Console.WriteLine($"{INDENT}{i + 1:##}.- {valores[i].ToString()}");
            }
            Console.WriteLine();
        }
        public T TrySeleccionarOpcionDeListaEnumerada<T>(string titulo, List<T> lista, string prompt)
        {
            MostrarListaEnumerada(titulo, lista);
            int input = int.MaxValue;
            while (input < 1 || input > lista.Count)
                try
                {
                    input = TryObtenerEntradaDeTipo<int>(prompt);
                }
                catch (Exception e)
                {
                    throw e;
                };
            return lista.ElementAt(input - 1);
        }
    }
}
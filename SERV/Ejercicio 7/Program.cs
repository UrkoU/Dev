using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{
    public static void Main()
    {
        List<string> strings = new List<string> { "Hola", "holasas", "buenas", "Buenas noches" };
        Console.WriteLine("Paso 1: texto a int (longitud)");
        List<int> ints = strings.Select(n => n.Length).ToList();
        foreach (int i in ints)
        {
            Console.WriteLine(i.ToString());
        }

        Console.WriteLine("Paso 2: impares");
        List<int> newInts = ints.Where(n => n % 2 == 1).ToList();
        foreach (int i in newInts)
        {
            Console.WriteLine(i.ToString());
        }

        Console.WriteLine("Paso 3: total");
        int total = newInts.Aggregate(0, (accum, current) => accum + current);
        Console.WriteLine(total.ToString());
        // Paso 4 concatenar con aggregate
        Console.WriteLine("Paso 1 con Linq: texto a int (lontigud)");
        var ints2 =
            from num in strings
            select num.Length;
        foreach (int i in ints2)
        {
            Console.WriteLine(i.ToString());
        }

        Console.WriteLine("Paso 2 con Linq: impares");
        var newInts2 =
            from num in ints2
            where (num % 2) == 1
            select num;
        foreach (int i in newInts2)
        {
            Console.WriteLine(i.ToString());
        }

        Console.WriteLine("Paso 3 con Linq: total");
        int total2 = 0;
        total2 += (
            from num in (
                from s in strings
                select s.Length)
            where (num % 2 == 1)
            select num).Sum();
        Console.WriteLine(total2.ToString());
        // Paso 4 concatenar con aggregate y linq
    }
}
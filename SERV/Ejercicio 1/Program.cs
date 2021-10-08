using System;

var notas = new[] { 7.1M, 4, 6, 5, 4, 6.5M, 7 };
int index;
decimal media;
int aprobados;

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
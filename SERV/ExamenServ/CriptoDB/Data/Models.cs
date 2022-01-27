using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cripto.Models
{
    public class Cartera
    {
        //Clave Principal NO AUTONUMERICA
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CarteraId { get; set; }
        public string Nombre { get; set; }
        public string Exchange { get; set; }

        //Escribe las propiedades de navegación a otras Entidades

        // A implementar
        public override string ToString() => $"Cartera {Nombre} con {CarteraId} y exchange {Exchange}";
    }
    public class Moneda
    {
        //Clave Principal String
        [Key]
        public string MonedaId { get; set; }
        public decimal Actual { get; set; }
        public decimal Maximo { get; set; }

        //Escribe las propiedades de navegación a otras Entidades
        
        // A implementar
        public override string ToString() => $"La Moneda {MonedaId} tiene un valor actual de {Actual}€ y su máximo ha sido {Maximo}€";
    }
    public class Contrato
    {
        //Decide cómo vas a implementar la clave principal
        [Key]
        public int ContratoId { get; set; }// = new Random().Next();
        //Escribe las propiedades de relación 1:N entre Moneda y Cartera
        public int CarteraId { get; set; }
        public string MonedaId { get; set; }
        public int Cantidad { get; set; }
        public Cartera cartera { get; set; }
        public Moneda moneda { get; set; }

        //Escribe las propiedades de navegación a otras Entidades

        // A implementar
        public override string ToString() => $"Este contrato tiene id {ContratoId}, y es un contrato entre {CarteraId} y {MonedaId} por {Cantidad} monedas";
    }

}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class Meteorologia
{
    public Meteorologia()
    {
    }
    [Key]
    public string Codigo { get; set; }
    public string Nombre { get; set; }
    public string Latitud { get; set; }
    public string Longitud { get; set; }
    public string Descripcion{get;set;}
    public string Temperatura{get;set;}
    public string Humedad{get;set;}
    public string VelocidadViento{get;set;}
    public string PrecipitacionAcumulada{get;set;}
    
}
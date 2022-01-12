using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class BalizaItem
{
    public BalizaItem()
    {
    }
    [Key]
    public string Codigo { get; set; }
    public string Nombre { get; set; }
    public string Tipo { get; set; }
    public string Fechacreacion { get; set; }
    public string LATWGS84 { get; set; }
    public string LONWGS84 { get; set; }
    public string Municipio { get; set; }
    public string Provincia { get; set; }
    public string URLamigable { get; set; }
    public string URLfisica { get; set; }
    public string XMLdatos { get; set; }
    public string XMLmetadatos { get; set; }
    public string ZIP { get; set; }

    // public List<BalizaItem> Balizas { get; set; }
}
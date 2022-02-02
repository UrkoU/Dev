using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class OpcionesUsuario
{
    public OpcionesUsuario()
    {
    }
    [Key]
    public int IdUsuario { get; set; }
    [Key]
    public string CodigoBaliza { get; set; }
    public bool Temperatura { get; set; }
    public bool SensacionTermica { get; set; }
    public bool Humedad { get; set; }
    public bool VelocidadViento { get; set; }
    public bool DireccionViento { get; set; }
    public bool HoraAmanecer { get; set; }
    public bool HoraAtardecer { get; set; }
    public bool PresionAtmosferica { get; set; }

}
using System;
using System.ComponentModel.DataAnnotations;

public class TiempoItem
{

        [Key]
        public string CodigoBaliza { get; set; }
        public string Municipio { get; set; }
        public string Nombre { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Fecha { get; set; }
        public int Temperatura { get; set; }
        public int Humedad { get; set; }
        public int VelocidadViento { get; set; }
        public int PrecipitacionAcumulada { get; set; }



}

using System;
using System.ComponentModel.DataAnnotations;

namespace prueba.Models
{
    public class Mascota
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int UsuarioId { get; set; }
    }
}
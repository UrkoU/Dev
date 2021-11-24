using System.Collections.Generic;
namespace prueba
{
    public class Mascota
    {
        public int MascotaId { get; set; } //PK
        public string Nombre { get; set; }
        public string Raza { get; set; }
        public int UsuarioId { get; set; } //FK
        public Usuario Usuario { get; set; } // Atr. de Navegación
        public override string ToString() => $"{MascotaId}: {Nombre}/{Raza} ({Usuario.Nombre})";
    }
}
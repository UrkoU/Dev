using System.Collections.Generic;
namespace prueba
{
    public class Usuario
    {
        public int Id { get; set; } //PK
        public string Nombre { get; set; }
        public List<Mascota> Mascotas { get; } = new List<Mascota>(); //EF Atr. de navegación

        public override string ToString() => $"{Id}:{Nombre} ({Mascotas.Count} Mascotas)";
    }
}
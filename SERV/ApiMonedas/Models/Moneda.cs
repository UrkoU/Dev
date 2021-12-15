namespace ApiMonedas.Models
{
    public class Moneda
    {
        public long Id { get; set; }
        public string Nombre { get; set; }
        public float ValorUltimo { get; set; }
        public float ValorMaximo { get; set; }
    }
}
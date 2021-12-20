using System.ComponentModel.DataAnnotations;

namespace ApiEroski.Models
{
    public class Ticket
    {
        [Key]
        public string Nombre { get; set; }
        public int NumeroTicket { get; set; }
    }
}
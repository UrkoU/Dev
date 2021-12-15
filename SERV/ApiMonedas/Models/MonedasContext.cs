using Microsoft.EntityFrameworkCore;

namespace ApiMonedas.Models
{
    public class MonedasContext : DbContext
    {
        public MonedasContext(DbContextOptions<MonedasContext> options)
            : base(options)
        {
        }

        public DbSet<Moneda> Monedas { get; set; }
    }
}
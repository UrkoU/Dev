#define SQL_NO
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Cripto.Models;

public class CryptoContext : DbContext
{
    public static string connString { get; private set; }
#if SQL //SQLServer
     = $"Server=localhost;Database=CryptoDB;User Id=sa;Password=Pa88word;MultipleActiveResultSets=true";
#else //Windows
     = $"Server=(localdb)\\mssqllocaldb;Database=CrytoDB;Trusted_Connection=True;MultipleActiveResultSets=true";
#endif
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer(connString);

    // public CryptoContext(DbContextOptions<CryptoContext> options) : base(options) { }
    // public CryptoContext() : base()
    // {

    // }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contrato>().HasIndex(contrato => new
        {
            contrato.MonedaId,
            contrato.CarteraId
        }).IsUnique();
    }

    public DbSet<Cripto.Models.Moneda> Moneda { get; set; }

    public DbSet<Cripto.Models.Cartera> Cartera { get; set; }

    public DbSet<Cripto.Models.Contrato> Contrato { get; set; }
}

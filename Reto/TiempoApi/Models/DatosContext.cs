using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TiempoApi.Models;

public class DatosContext : DbContext
{

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer(connString);
    public static string connString = $"Server=185.60.40.210\\SQLEXPRESS,58015;Database=DB13Urko;User Id=sa;Password=Pa88word;";

    public DbSet<Meteorologia> MeteorologiaItem { get; set; }
    public DbSet<User> UsuarioItem { get; set; }
    public DbSet<OpcionesUsuario> OpcionesUsuarioItem { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OpcionesUsuario>().HasKey(opcionesUsuario => new
        {
            opcionesUsuario.IdUsuario,
            opcionesUsuario.CodigoBaliza
        });
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Username).IsUnique();
        });
    }

}

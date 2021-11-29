using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Etiqueta> Etiquetas { get; set; }

    public string connString { get; private set; }

    public BloggingContext()
    {
        connString = $"Server=(localdb)\\mssqllocaldb;Database=EFRepaso1;Trusted_Connection=True;MultipleActiveResultSets=true";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer(connString);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog_Etiqueta>().HasKey(be => new
        {
            be.BlogId,
            be.EtiquetaId
        });
    }
}

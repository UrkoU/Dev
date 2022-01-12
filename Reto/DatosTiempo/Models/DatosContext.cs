using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class DatosContext : DbContext
{

    public DbSet<BalizaItem> BalizaItem { get; set; }
    public DbSet<TiempoItem> TiempoItem { get; set; }

    public string connString { get; private set; }

    public DatosContext()
    {
        var database = "TiempoUrko"; // "EF{XX}Nombre" => EF00Santi
        connString = $"Server=(localdb)\\mssqllocaldb;Database={database};MultipleActiveResultSets=true";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer(connString);


}

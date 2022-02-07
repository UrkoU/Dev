using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class DatosContext : DbContext
{

    public DbSet<Meteorologia> MeteorologiaItem { get; set; }

    public string connString { get; private set; }

    public DatosContext()
    {
        var database = "DB13Urko";
        connString = $"Server=185.60.40.210\\SQLEXPRESS,58015;Database={database};User Id=sa;Password=Pa88word;";

    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer(connString);

}
using System.Data.Common;
using System;
using static System.Console;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


public class InstitutoContext : DbContext
{
    public DbSet<Alumno> Alumnos { get; set; }
    public DbSet<Modulo> Modulos { get; set; }
    public DbSet<Matricula> Matriculas { get; set; }
    public string connString { get; private set; }

    public InstitutoContext()
    {
        var database = "EF02Paula"; // "EF{XX}Nombre" => EF00Santi
        connString = $"Server=185.60.40.210\\SQLEXPRESS,58015;Database={database};User Id=sa;Password=Pa88word;MultipleActiveResultSets=true";
    
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer(connString);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Matricula>().HasIndex(m => new
                {
                    m.AlumnoId,
                    m.ModuloId
                }).IsUnique();
    }
    
}
public class Alumno
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int AlumnoId { get; set; }
    public string Nombre { get; set; }

    public int Edad {get; set;}
    public decimal Efectivo {get; set;}

    public string Pelo { get; set; }
     public List<Matricula> Matriculacion { get; } = new List<Matricula>();

}
public class Modulo
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int ModuloId { get; set; }
    public string Titulo { get; set; }
    public int Creditos {get; set;}
    public int Curso {get; set;}
     public List<Matricula> Matriculado { get; } = new List<Matricula>();

}
public class Matricula
{
    [Key]
    public int MatriculaId { get; set; }
    public int AlumnoId { get; set; }
    public int ModuloId { get; set; }
    public Alumno alumno { get; set; }
    public Modulo modulo { get; set; }
}

class Program
{
    static void GenerarDatos()
    {
        using (var db = new InstitutoContext())
        {
            // Borrar todo
            db.Alumnos.RemoveRange(db.Alumnos);
            db.Modulos.RemoveRange(db.Modulos);
            db.Matriculas.RemoveRange(db.Matriculas);

            db.SaveChanges();

            // Añadir Alumnos
            // Id de 1 a 7
            db.Alumnos.Add(new Alumno { AlumnoId = 1, Nombre = "Pepe", Edad = 17, Efectivo = 100.02M, Pelo = "rubio" });
            db.Alumnos.Add(new Alumno { AlumnoId = 2, Nombre = "Luis", Edad = 20, Efectivo = 200.30M, Pelo = "moreno" });
            db.Alumnos.Add(new Alumno { AlumnoId = 3, Nombre = "Marta", Edad = 22, Efectivo = 150.2M, Pelo = "rubio" });
            db.Alumnos.Add(new Alumno { AlumnoId = 4, Nombre = "Laura", Edad = 18, Efectivo = 180.50M, Pelo = "castaño" });
            db.Alumnos.Add(new Alumno { AlumnoId = 5, Nombre = "Paula", Edad = 21, Efectivo = 110.70M, Pelo = "moreno" });
            db.Alumnos.Add(new Alumno { AlumnoId = 6, Nombre = "Unai", Edad = 19, Efectivo = 210.14M, Pelo = "castaño" });
            db.Alumnos.Add(new Alumno { AlumnoId = 7, Nombre = "Maria", Edad = 18, Efectivo = 300.01M, Pelo = "rubio" });
            
            db.SaveChanges();

            // Añadir Módulos
            // Id de 1 a 10
            db.Modulos.Add(new Modulo { ModuloId = 1, Titulo = "Lengua", Creditos = 6, Curso = 1 });
            db.Modulos.Add(new Modulo { ModuloId = 2, Titulo = "Matematicas", Creditos = 2, Curso = 2 });
            db.Modulos.Add(new Modulo { ModuloId = 3, Titulo = "Informaica", Creditos = 4, Curso = 1 });
            db.Modulos.Add(new Modulo { ModuloId = 4, Titulo = "Euskera", Creditos = 1, Curso = 1 });
            db.Modulos.Add(new Modulo { ModuloId = 5, Titulo = "Frances", Creditos = 9, Curso = 2 });
            db.Modulos.Add(new Modulo { ModuloId = 6, Titulo = "Ingles", Creditos = 3, Curso = 2 });
            db.Modulos.Add(new Modulo { ModuloId = 7, Titulo = "Economia", Creditos = 4, Curso = 2 });
            db.Modulos.Add(new Modulo { ModuloId = 8, Titulo = "Latin", Creditos = 5, Curso = 1 });
            db.Modulos.Add(new Modulo { ModuloId = 9, Titulo = "Tecnologia", Creditos = 7, Curso = 1 });
            db.Modulos.Add(new Modulo { ModuloId = 10, Titulo = "Biologia", Creditos = 8, Curso = 2 });
            
            db.SaveChanges();

            // Matricular Alumnos en Módulos
            db.Matriculas.Add(new Matricula{AlumnoId=1, ModuloId=4});
            db.Matriculas.Add(new Matricula{AlumnoId=2, ModuloId=3});
            db.Matriculas.Add(new Matricula{AlumnoId=3, ModuloId=2});
            db.Matriculas.Add(new Matricula{AlumnoId=4, ModuloId=5});
            db.Matriculas.Add(new Matricula{AlumnoId=5, ModuloId=8});
            db.Matriculas.Add(new Matricula{AlumnoId=6, ModuloId=9});
            db.Matriculas.Add(new Matricula{AlumnoId=7, ModuloId=1});
            db.Matriculas.Add(new Matricula{AlumnoId=1, ModuloId=1});
            db.Matriculas.Add(new Matricula{AlumnoId=3, ModuloId=2});
            
            db.SaveChanges();

        }
    }

    static void BorrarMatriculaciones()
    {
        using (var db = new InstitutoContext())
        {
            // Borrar las matriculas de:
            // AlumnoId multiplo de 3 y ModuloId Multiplo de 2;
            foreach (var alumno in db.Matriculas)
            {
                if (alumno.AlumnoId % 3 == 0 && alumno.ModuloId % 2 == 0)
                {
                    db.Matriculas.Remove(alumno);
                }
            }

        }
    }
    static void RealizarQuery()
    {
        using (var db = new InstitutoContext())
        {
            // Las queries que se piden en el examen

            //Filtering
            var query1 = from o in db.Alumnos where o.Pelo == "rubio"
            select o;

            //Return Anonymous Type
            var query2 = from o in db.Modulos select new {
                moduloId  = o.ModuloId,
                titulo = o.Titulo
            };

            //Ordering
            var query3 = from o in db.Alumnos orderby o.Edad descending
            select o;


            //Joining
            var query4 = from c in db.Matriculas
                         join o in db.Alumnos on   
                         c.AlumnoId equals o.AlumnoId
                         select new {
                             o.Nombre,
                             o.Edad,
                             o.Efectivo,
                             o.Pelo
                         };

            //Grouping             
            var query5 = from o in db.Alumnos 
                         group o by o.AlumnoId into g
                         select new{
                             alumnoId = g.Key,
                             Total = g.Count()
                         };
            

            //Paging (using Skip & Take)
            var query6 = (from o in db.Modulos where o.Curso == 1
                           select o).Take(3);
           
           
            //Element Operators (Single, Last, First, ElementAt, Defaults)
            var query7 = (from o in db.Modulos where o.Creditos > 3
                          select o).Last();
           
            // ToArray
            string[] nombres = (from c in db.Alumnos select c.Nombre).ToArray();

            // ToDictionary
            Dictionary<int, Alumno> col = db.Alumnos.ToDictionary(c => c.AlumnoId);
            Dictionary<string, decimal> customerOrdersWithMaxCost = (from oc in
            (from o in db.Alumnos  
            join c in db.Alumnos on o.AlumnoId equals c.AlumnoId
            select new { c.Nombre, o.Efectivo })
            group oc by oc.Nombre into g
            select g).ToDictionary(g => g.Key, g => g.Max(oc => oc.Efectivo));

            //ToList
            // List<Alumno> alumnosMayor18 = (from o in db.Alumnos
            //               where o.Edad > 18
            //               orderby o.Edad).ToList();

            //toLookup             
            
            ILookup<string, int> alumnos = db.Alumnos.ToLookup(c => c.Nombre, c => c.Edad);
        }
    }

    static void Main(string[] args)
    {
        GenerarDatos();
        BorrarMatriculaciones();
        RealizarQuery();
    }

}

// dotnet ef migrations add InitialCreate
// dotnet ef database update
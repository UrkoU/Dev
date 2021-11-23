using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using prueba.Models;

    public class PruebaContext : DbContext
    {
        public PruebaContext (DbContextOptions<PruebaContext> options)
            : base(options)
        {
        }

        public DbSet<prueba.Models.Usuario> Usuario { get; set; }

        public DbSet<prueba.Models.Mascota> Mascota { get; set; }
    }

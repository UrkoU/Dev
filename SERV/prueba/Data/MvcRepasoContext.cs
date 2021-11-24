using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using prueba;

    public class MvcRepasoContext : DbContext
    {
        public MvcRepasoContext (DbContextOptions<MvcRepasoContext> options)
            : base(options)
        {
        }

        public DbSet<prueba.Mascota> Mascota { get; set; }

        public DbSet<prueba.Usuario> Usuario { get; set; }
    }

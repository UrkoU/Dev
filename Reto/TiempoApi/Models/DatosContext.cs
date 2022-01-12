using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

    public class DatosContext : DbContext
    {
        public DatosContext (DbContextOptions<DatosContext> options)
            : base(options)
        {
        }

        public DbSet<BalizaItem> BalizaItem { get; set; }
        public DbSet<TiempoItem> TiempoItem { get; set; }

    }

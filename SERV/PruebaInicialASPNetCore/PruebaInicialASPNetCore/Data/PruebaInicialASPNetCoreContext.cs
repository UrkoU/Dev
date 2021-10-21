using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Models;

namespace PruebaInicialASPNetCore.Data
{
    public class PruebaInicialASPNetCoreContext : DbContext
    {
        public PruebaInicialASPNetCoreContext (DbContextOptions<PruebaInicialASPNetCoreContext> options)
            : base(options)
        {
        }

        public DbSet<MvcMovie.Models.Movie> Movie { get; set; }
    }
}

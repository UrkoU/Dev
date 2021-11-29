// using System;
// using System.Collections.Generic;
// using Microsoft.EntityFrameworkCore;

// namespace EFRepaso
// {
//     public class BloggingContext : DbContext
//     {
//         public DbSet<Blog> Blogs { get; set; }
//         public DbSet<Post> Posts { get; set; }

//         public string connString { get; private set; }

//         public BloggingContext()
//         {
//             connString = $"Server=(localdb)\mssqllocaldb;Database=EFPrueba;Trusted_Connection=True;MultipleActiveResultSets=true";
//         }

//         protected override void OnConfiguring(DbContextOptionsBuilder options)
//             => options.UseSqlServer(connString);
//     }

// }
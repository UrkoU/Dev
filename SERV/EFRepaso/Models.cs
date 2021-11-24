using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EFRepaso
{
    public class BloggingContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        public string connString { get; private set; }

        public BloggingContext()
        {
            //connString = $"Server=185.60.40.210\SQLEXPRESS,58015;Database=EFPrueba;User Id=sa;Password=Pa88word;";
            connString = $"Server=(localdb)\\mssqllocaldb;Database=EFPrueba;Trusted_Connection=True;MultipleActiveResultSets=true";
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer(connString);
    }

    public class Blog
    {
        public int BlogId { get; set; }
        public string Url { get; set; }
        public List<Post> Posts { get; } = new List<Post>();

        public override string ToString() => $"{BlogId}: {Url} ({Posts.Count} Posts)";

    }

    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int BlogId { get; set; }
        public Blog Blog { get; set; }

        public override string ToString() => $"{BlogId}/{PostId}: {Title}";

    }
}
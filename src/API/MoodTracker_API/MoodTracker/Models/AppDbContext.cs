using Microsoft.EntityFrameworkCore;

namespace MoodTracker.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) 
        {
                
        }

        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Registros> Registros { get; set; } 
        public DbSet<NotaMensal> NotaMensal {  get; set; }
        public DbSet<Humor> Humor { get; set; }

    }
}

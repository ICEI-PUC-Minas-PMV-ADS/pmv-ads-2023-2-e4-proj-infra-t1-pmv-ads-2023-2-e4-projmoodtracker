using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MoodTracker.Models
{
    [Table("Humor")]
    public class Humor
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Descricao { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MoodTracker.Models
{
    [Table("Registros")]
    public class Registros
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public DateTime Data { get; set; }
        [Required]
        public string Texto { get; set; }
        [Required]
        public int Humor { get; set; }
        [Required]
        public string RegFeliz { get; set; }
        [Required]
        public string RegTriste { get; set; }
        [Required]

        public string Usuario { get; set; } 
        

    }
}

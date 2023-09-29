using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MoodTracker.Models
{
    [Table("NotaMensal")]
    public class NotaMensal
    {
        [Key]
        public int Id { get; set; }
        [Required]  
        public string Nota { get; set; }
        [Required]  
        public DateTime Data {  get; set; }
        [Required]
        public string Usuario { get; set; } 
           
    }
}

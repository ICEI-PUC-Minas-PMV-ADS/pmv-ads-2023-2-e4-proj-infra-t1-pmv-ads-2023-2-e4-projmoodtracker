using System.ComponentModel.DataAnnotations;

namespace MoodTracker.Models
{
    public class AuthDto
    {
        [Required]
        public string Usuario { get; set; }
        [Required]
        public string Senha {  get; set; }  

    }
}

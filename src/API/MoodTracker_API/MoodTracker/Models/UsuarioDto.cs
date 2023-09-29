using System.ComponentModel.DataAnnotations;

namespace MoodTracker.Models
{
    public class UsuarioDto
    {
        
        public string? Username { get; set; }
        [Required]
        public string Nome { get; set; }

        public string NomeAlt { get; set; }
        [Required]
        public DateTime DataNascimento { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }

    }
}

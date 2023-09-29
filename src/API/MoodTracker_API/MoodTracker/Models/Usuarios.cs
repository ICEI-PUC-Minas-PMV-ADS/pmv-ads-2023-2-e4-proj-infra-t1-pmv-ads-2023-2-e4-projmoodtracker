using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MoodTracker.Models
{
    [Table ("Usuarios")]
    public class Usuarios
    {
        [Key]
        public string Username { get; set; }
        [Required]
        public string Nome { get; set; }

        public string NomeAlt { get; set; }
        [Required]
        public DateTime DataNascimento { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        [JsonIgnore]
        public string Senha { get; set; }

       

    }
}

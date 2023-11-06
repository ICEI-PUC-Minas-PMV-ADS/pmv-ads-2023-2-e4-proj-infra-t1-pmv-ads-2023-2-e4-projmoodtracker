using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MoodTracker.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MoodTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        //Obtenção de todos usuário cadastrados

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Usuarios.ToListAsync();
            return Ok (model);
        }

        //Criação de um novo usuário
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Create(UsuarioDto model)
        {
            Usuarios novo = new Usuarios()
            {
                Nome = model.Nome,
                Username = model.Username,
                Email = model.Email,
                NomeAlt = model.NomeAlt,
                Senha = BCrypt.Net.BCrypt.HashPassword(model.Senha),
                DataNascimento = model.DataNascimento
            };

            //Usando métodos para verificar se o username ou email já existe para outra conta.
            if(UsuarioExists(model.Username))
            {
                return BadRequest(new { message = "O usuário informado já existe." });
            }else if (EmailExists(model.Email))
            {
                return BadRequest(new { message = "O Email informado já está cadastrado para outra conta." });
            }

             

            _context.Usuarios.Add(novo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetByUser", new {username = novo.Username}, novo);

        }

        //Obtenção de usuário pelo Username

        [HttpGet("{username}")]

        public async Task<ActionResult> GetByUser(string username)
        {
            //Verificando se o usuário informado está vazio.

            if (username == null) { return BadRequest(new { message = "Nenhum usuário informado." }); }
            var model = await _context.Usuarios.FirstOrDefaultAsync(c => c.Username == username);

            if (model == null) NotFound();

            return Ok(model);
        }

        //Método para verificar se o username informado na criação de um usuário já existe para outra conta
        private bool UsuarioExists(string id)
        {
            return _context.Usuarios.Any(e => e.Username == id);
        }

        //Método para verificar se o email informado na criação de um usuário já existe para outra conta
        private bool EmailExists(string id)
        {
            return _context.Usuarios.Any(e => e.Email == id);
        }

        //Alteração de dados do Usuário

        [HttpPut("{username}")]
        public async Task<ActionResult> Update(string username, UsuarioDto model)
        {
            if (username != model.Username) return BadRequest();
            var modelDB = await _context.Usuarios.AsNoTracking().FirstOrDefaultAsync(c => c.Username == username);
            if (modelDB == null) return NotFound();

            modelDB.Username = model.Username;
            modelDB.Email = model.Email;
            modelDB.Senha = BCrypt.Net.BCrypt.HashPassword(model.Senha);
            modelDB.Nome = model.Nome;
            modelDB.DataNascimento = model.DataNascimento;
            modelDB.NomeAlt = model.NomeAlt;



            _context.Usuarios.Update(modelDB);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost("{authenticate}")]
        public async Task<ActionResult> Authenticate(AuthDto model)
        {
            var usuarioDB = await _context.Usuarios.FindAsync(model.Usuario);
            
            if (usuarioDB == null || !BCrypt.Net.BCrypt.Verify(model.Senha, usuarioDB.Senha))
                return Unauthorized();

            var jwt = GenerateJwtToken(usuarioDB);
         
            return Ok( new {jtwToken = jwt});
        }

        private string GenerateJwtToken(Usuarios model)
        {
            var TokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Ry74cBQva5dThwbwchR9jhbtRFnJxWSZ");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Username),

            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)

            };
            var token = TokenHandler.CreateToken(tokenDescriptor);
            return TokenHandler.WriteToken(token);
        }

    }


}

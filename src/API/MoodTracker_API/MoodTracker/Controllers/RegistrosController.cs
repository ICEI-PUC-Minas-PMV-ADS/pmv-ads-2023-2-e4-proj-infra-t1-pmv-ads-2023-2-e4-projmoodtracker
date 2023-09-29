using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using MoodTracker.Models;
using System.Drawing;
using System.Security.Cryptography;

namespace MoodTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RegistrosController(AppDbContext context)
        {
            _context = context;
        }

        //Obtenção de todos registros cadastrados

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Registros.ToListAsync();
            return Ok(model);
        }

        //Criação de um novo usuário

        [HttpPost]
        public async Task<ActionResult> Create(Registros model)
        {
            // Primeiro, verifique se já existe um registro para o mesmo dia, mês e ano do usuário
            bool registroJaExiste = await _context.Registros
                .AnyAsync(r =>
                    r.Usuario == model.Usuario &&
                    r.Data.Date.Year == model.Data.Date.Year &&
                    r.Data.Date.Month == model.Data.Date.Month &&
                    r.Data.Date.Day == model.Data.Date.Day);

            if (registroJaExiste)
            {
                return BadRequest("Já existe um registro para este dia.");
            }

            _context.Registros.Add(model);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetById", new { id = model.Id }, model);;
        }

        
        [HttpGet("Username/{username}")]

        public async Task<ActionResult> GetByUser(string username)
        {
            //Verificando se o usuário informado está vazio.

            if (username == null) { return BadRequest(new { message = "Nenhum usuário informado." }); }
            var model = await _context.Registros.Where(c => c.Usuario == username).ToListAsync();

            if (model == null) NotFound();

            return Ok(model);
        }

        [HttpGet("{Id}")]

        public async Task<ActionResult> GetById(int id)
        {
            
            var model = await _context.Registros.FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) NotFound();

            return Ok(model);
        }

        //Edição de Registros

        [HttpPut("{Id}")]
        public async Task<ActionResult> Update(int id, Registros model)
        {
            if (id != model.Id) return BadRequest();
            var modelDB = await _context.Registros.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
            if (modelDB == null) return NotFound();

            _context.Registros.Update(model);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{Id}")]
            public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Registros.FindAsync(id);
            if (model == null) return NotFound();

            _context.Registros.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }






    }
}

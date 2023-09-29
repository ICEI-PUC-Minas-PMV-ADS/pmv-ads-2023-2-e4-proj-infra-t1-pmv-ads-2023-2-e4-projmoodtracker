using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoodTracker.Models;

namespace MoodTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NotaMensalController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NotaMensalController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.NotaMensal.ToListAsync();
            return Ok(model);
        }

        //Inclusão de uma nota Mensal

        [HttpPost]
        public async Task<ActionResult> Create(NotaMensal model)
        {

            _context.NotaMensal.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id}, model);

        }

        //Obtenção de Nota Mensal por Id

        [HttpGet("{Id}")]

        public async Task<ActionResult> GetById(int id)
        {

            var model = await _context.NotaMensal.FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) NotFound();

            return Ok(model);
        }


        //Alteração da nota Mensal

        [HttpPut("{Id}")]
        public async Task<ActionResult> Update(int id, NotaMensal model)
        {
            if (id != model.Id) return BadRequest();
            var modelDB = await _context.NotaMensal.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
            if (modelDB == null) return NotFound();

            _context.NotaMensal.Update(model);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}

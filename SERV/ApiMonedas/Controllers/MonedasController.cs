using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiMonedas.Models;

namespace ApiMonedas.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonedasController : ControllerBase
    {
        Random random = new Random();
        private readonly MonedasContext _context;

        public MonedasController(MonedasContext context)
        {
            _context = context;
        }

        // GET: api/Monedas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Moneda>>> GetMonedas()
        {
            return await _context.Monedas.ToListAsync();
        }

        // GET: api/Monedas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Moneda>> GetMoneda(long id)
        {
            var moneda = await _context.Monedas.FindAsync(id);

            if (moneda == null)
            {
                return NotFound();
            }



            return moneda;
        }

        // PUT: api/Monedas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMoneda(long id, Moneda moneda)
        {
            if (id != moneda.Id)
            {
                return BadRequest();
            }

            moneda.ValorUltimo = random.Next(10000);

            _context.Entry(moneda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonedaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Monedas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754        
        [HttpPost]
        public async Task<ActionResult<Moneda>> PostTodoItem(Moneda todoItem)
        {
            _context.Monedas.Add(todoItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetMonedas), new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/Monedas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMoneda(long id)
        {
            var moneda = await _context.Monedas.FindAsync(id);
            if (moneda == null)
            {
                return NotFound();
            }

            _context.Monedas.Remove(moneda);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MonedaExists(long id)
        {
            return _context.Monedas.Any(e => e.Id == id);
        }
    }
}

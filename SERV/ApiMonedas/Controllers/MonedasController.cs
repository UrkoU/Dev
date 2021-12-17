using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiMonedas.Models;

namespace ApiMonedas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonedasController : ControllerBase
    {
        private readonly MonedasContext _context;
        Random random = new Random();

        public MonedasController(MonedasContext context)
        {
            _context = context;
        }

        // GET: api/Monedas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Moneda>>> GetMonedaItems()
        {
            foreach (var item in _context.Monedas)
            {
                item.ValorUltimo = random.Next();

                if (item.ValorUltimo > item.ValorMaximo)
                {
                    item.ValorMaximo = item.ValorUltimo;
                }
            }

            _context.SaveChanges();

            return _context.Monedas;
        }

        // GET: api/Monedas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Moneda>> GetMonedaItem(string id)
        {
            var moneda = await _context.Monedas.FindAsync(id);

            if (moneda == null)
            {
                return NotFound();
            }



            moneda.ValorUltimo = random.Next();

            if (moneda.ValorUltimo > moneda.ValorMaximo)
            {
                moneda.ValorMaximo = moneda.ValorUltimo;
            }

            await PutMonedaItem(moneda.Nombre, moneda);

            return moneda;
        }

        // PUT: api/Monedas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMonedaItem(string id, Moneda moneda)
        {
            if (id != moneda.Nombre)
            {
                return BadRequest();
            }

            moneda.ValorUltimo = random.Next();

            if (moneda.ValorUltimo > moneda.ValorMaximo)
            {
                moneda.ValorMaximo = moneda.ValorUltimo;
            }


            _context.Entry(moneda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonedaItemExists(id))
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
        public async Task<ActionResult<Moneda>> PostMonedaItem(Moneda moneda)
        {
            moneda.ValorUltimo = random.Next();

            if (moneda.ValorUltimo > moneda.ValorMaximo)
            {
                moneda.ValorMaximo = moneda.ValorUltimo;
            }

            _context.Monedas.Add(moneda);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MonedaItemExists(moneda.Nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction(nameof(GetMonedaItem), new { Nombre = moneda.Nombre }, moneda);
        }

        // DELETE: api/Monedas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMonedaItem(string id)
        {
            var monedaItem = await _context.Monedas.FindAsync(id);
            if (monedaItem == null)
            {
                return NotFound();
            }

            _context.Monedas.Remove(monedaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MonedaItemExists(string id)
        {
            return _context.Monedas.Any(e => e.Nombre == id);
        }
    }
}

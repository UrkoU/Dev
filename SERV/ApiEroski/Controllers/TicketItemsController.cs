using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiEroski.Models;

namespace ApiEroski.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketItemsController : ControllerBase
    {
        private readonly TicketContext _context;

        public TicketItemsController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/TicketItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTicketItems()
        {
            return await _context.TicketItems.ToListAsync();
        }

        // GET: api/TicketItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(string id)
        {
            var ticket = await _context.TicketItems.FindAsync(id);

            if (ticket == null)
            {
                return NotFound();
            }

            return ticket;
        }

        [HttpGet("/reset/{id}")]
        public async Task<ActionResult> GetTicketItemReset(string id)
        {
            var item = await _context.TicketItems
              .FirstOrDefaultAsync(t => t.Nombre == id);
            item.NumeroTicket = 0;
            await _context.SaveChangesAsync();
            return Ok(new
            {
                ResetOn = DateTime.Now,
                item = item
            });

        }

        [HttpGet("/reset")]
        public async Task<ActionResult> GetTicketsItemReset()
        {
            foreach (var item in _context.TicketItems)
            {
                item.NumeroTicket = 0;
            }

            await _context.SaveChangesAsync();
            return Ok(new
            {
                ResetOn = DateTime.Now
            });

        }



        // PUT: api/TicketItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketItem(string id)
        {
            var ticketItem = await _context.TicketItems.FindAsync(id);

            ticketItem.NumeroTicket++;

            _context.Entry(ticketItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketExists(id))
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

        // POST: api/TicketItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ticket>> PostTicket(Ticket ticket)
        {
            _context.TicketItems.Add(ticket);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TicketExists(ticket.Nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTicket", new { id = ticket.Nombre }, ticket);
        }

        // DELETE: api/TicketItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicket(string id)
        {
            var ticket = await _context.TicketItems.FindAsync(id);
            if (ticket == null)
            {
                return NotFound();
            }

            _context.TicketItems.Remove(ticket);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TicketExists(string id)
        {
            return _context.TicketItems.Any(e => e.Nombre == id);
        }
    }
}

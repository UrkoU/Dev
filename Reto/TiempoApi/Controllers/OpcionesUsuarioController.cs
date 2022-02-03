using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiempoApi.Models;

namespace TiempoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpcionesUsuarioController : ControllerBase
    {
        private readonly DatosContext _context;

        public OpcionesUsuarioController(DatosContext context)
        {
            _context = context;
        }

        // GET: api/Meteorologia
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<OpcionesUsuario>>> GetOpcionesUsuario(int id)
        {
            var lista = await _context.OpcionesUsuarioItem.Where(o => o.IdUsuario == id).ToListAsync();
            return lista;
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<OpcionesUsuario>> PutOpcionUsuario(OpcionesUsuario opciones)
        {
            Console.WriteLine("PUT  ", opciones.IdUsuario.ToString() + " " + opciones.CodigoBaliza);
            bool exists = OpcionesUsuarioExists(opciones.IdUsuario, opciones.CodigoBaliza);
            Console.WriteLine("EXISTS" + exists);
            if (!exists)
            {
                Console.WriteLine("Not found");
                _context.OpcionesUsuarioItem.Add(opciones);
            }
            else
            {
                Console.WriteLine("Found");
                // _context.OpcionesUsuarioItem.Remove(opciones);
                // _context.OpcionesUsuarioItem.Add(opciones);
                _context.Entry(opciones).State = EntityState.Modified;
            }
            await _context.SaveChangesAsync();
            return opciones;
        }

        // DELETE: api/OpcionesUsuario/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOpciones(int id)
        {
            // var usuario = await _context.UsuarioItem.FindAsync(id);
            Console.WriteLine($"DELETE {id}");
            if (!UsuarioExists(id))
            {
                Console.WriteLine("User not found");
                return NotFound();
            }
            var lista = _context.OpcionesUsuarioItem.Where(opc => opc.IdUsuario == id);
            foreach (var item in lista)
            {
                Console.WriteLine($"DELETED {item.CodigoBaliza}");
                _context.OpcionesUsuarioItem.Remove(item);
            }
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/OpcionesUsuario/5
        [Authorize]
        [HttpDelete("{id}/{codigo}")]
        public async Task<IActionResult> DeleteOpcion(int id, string codigo)
        {
            // var usuario = await _context.UsuarioItem.FindAsync(id);
            Console.WriteLine($"DELETE {id}");
            if (!UsuarioExists(id))
            {
                Console.WriteLine("User not found");
                return NotFound();
            }
            var item = await _context.OpcionesUsuarioItem.Where(opc => opc.IdUsuario == id && opc.CodigoBaliza == codigo).FirstAsync();
            _context.OpcionesUsuarioItem.Remove(item);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool OpcionesUsuarioExists(int id, string codigo)
        {
            return _context.OpcionesUsuarioItem.Any(e => e.IdUsuario == id && e.CodigoBaliza == codigo);
        }

        private bool UsuarioExists(int id)
        {
            return _context.UsuarioItem.Any(e => e.Id == id);
        }
    }
}

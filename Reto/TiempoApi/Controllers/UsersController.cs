using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; //[AllowAnonymous]
using TiempoApi.Auth;
using System.Threading.Tasks;
using System;
using TiempoApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace TiempoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private IAuthService _userService;

        public UsersController(IAuthService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Models.User>> PostUsuario(User usuario)
        {
            var _context = new DatosContext();
            Console.WriteLine("POST  ", usuario.Id.ToString());
            bool exists = UsuarioExists(usuario.Id);
            Console.WriteLine("EXISTS" + exists);
            if (!exists)
            {
                Console.WriteLine("Not found");
                _context.UsuarioItem.Add(usuario);
            }
            else
            {
                Console.WriteLine("Found");
                // _context.OpcionesUsuarioItem.Remove(opciones);
                // _context.OpcionesUsuarioItem.Add(opciones);
                _context.Entry(usuario).State = EntityState.Modified;
            }
            await _context.SaveChangesAsync();
            return usuario;
        }

        // DELETE: api/User/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var _context = new DatosContext();
            Console.WriteLine("DELETE ", id.ToString());
            if (!UsuarioExists(id))
            {
                Console.WriteLine("User not found");
                return NotFound();
            }
            var lista = _context.OpcionesUsuarioItem.Where(opc => opc.IdUsuario == id);
            foreach (var item in lista)
            {
                _context.OpcionesUsuarioItem.Remove(item);
            }
            var usuario = await _context.UsuarioItem.FindAsync(id);
            _context.UsuarioItem.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(int id)
        {
            var _context = new DatosContext();
            return _context.UsuarioItem.Any(e => e.Id == id);
        }
    }
}

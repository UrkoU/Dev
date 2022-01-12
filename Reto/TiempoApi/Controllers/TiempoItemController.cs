using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TiempoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiempoItemController : ControllerBase
    {
        private readonly DatosContext _context;

        public TiempoItemController(DatosContext context)
        {
            _context = context;
        }

        // GET: api/TiempoItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TiempoItem>>> GetTiempoItem()
        {
            return await _context.TiempoItem.ToListAsync();
        }

        // GET: api/TiempoItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TiempoItem>> GetTiempoItem(string id)
        {
            var tiempoItem = await _context.TiempoItem.FindAsync(id);

            if (tiempoItem == null)
            {
                return NotFound();
            }

            return tiempoItem;
        }

        private bool TiempoItemExists(string id)
        {
            return _context.TiempoItem.Any(e => e.Municipio == id);
        }
    }
}

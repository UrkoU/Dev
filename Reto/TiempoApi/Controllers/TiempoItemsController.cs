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
    public class TiempoItemsController : ControllerBase
    {
        private readonly DatosContext _context;

        public TiempoItemsController(DatosContext context)
        {
            _context = context;
        }

        // GET: api/TiempoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TiempoItem>>> GetTiempoItem()
        {
            return await _context.TiempoItem.ToListAsync();
        }

        // GET: api/TiempoItems/5
        [HttpGet("{fk}")]
        public async Task<ActionResult<TiempoItem>> GetTiempoItem(string fk)
        {
            var tiempoItem =  await  _context.TiempoItem.Where(o => o.CodigoBaliza == fk).FirstAsync();

            if (tiempoItem == null)
            {
                return NotFound();
            }

            return tiempoItem;
        }

        private bool TiempoItemExists(string id)
        {
            return _context.TiempoItem.Any(e => e.CodigoBaliza == id);
        }
    }
}

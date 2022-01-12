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
    public class BalizaItemController : ControllerBase
    {
        private readonly DatosContext _context;

        public BalizaItemController(DatosContext context)
        {
            _context = context;
        }

        // GET: api/BalizaItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BalizaItem>>> GetBalizaItem()
        {
            return await _context.BalizaItem.ToListAsync();
        }

        // GET: api/BalizaItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BalizaItem>> GetBalizaItem(string id)
        {
            var balizaItem = await _context.BalizaItem.FindAsync(id);

            if (balizaItem == null)
            {
                return NotFound();
            }

            return balizaItem;
        }

        private bool BalizaItemExists(string id)
        {
            return _context.BalizaItem.Any(e => e.Codigo == id);
        }
    }
}

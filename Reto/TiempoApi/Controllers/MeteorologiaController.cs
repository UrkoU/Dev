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
    public class MeteorologiaController : ControllerBase
    {
        private readonly DatosContext _context;

        public MeteorologiaController(DatosContext context)
        {
            _context = context;
        }

        // GET: api/Meteorologia
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meteorologia>>> GetMeteorologiaItem()
        {
            return await _context.MeteorologiaItem.ToListAsync();
        }

        // GET: api/Meteorologia/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Meteorologia>> GetMeteorologia(string id)
        {
            var meteorologia = await _context.MeteorologiaItem.FindAsync(id);

            if (meteorologia == null)
            {
                return NotFound();
            }

            return meteorologia;
        }
        private bool MeteorologiaExists(string id)
        {
            return _context.MeteorologiaItem.Any(e => e.Codigo == id);
        }
    }
}

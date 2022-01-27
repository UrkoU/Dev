using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Cripto.Models;

namespace CriptoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QueryController : ControllerBase
    {
        private readonly CryptoContext db;

        public QueryController(CryptoContext context)
        {
            db = context;
        }

        [HttpGet("0")]
        public ActionResult Query0(int ValorActual = 50)
        {
            // Ejemplo de método en controlador
            var list = db.Moneda.ToListAsync();

            return Ok(new
            {
                ValorActual = "Parámetros para usar cuando sea posible",
                Descripcion = "Ejemplo en MODO NO ASYNC - DEBE SER ASÍNCRONOS",
                Valores = list,
            });
        }

        [HttpGet("1")]
        public async Task<ActionResult> Query1()
        {
            var list = await db.Moneda.Where(moneda => moneda.Actual >= 50).OrderBy(moneda => moneda.MonedaId).ToListAsync();

            return Ok(new
            {
                Id = "1",
                Descripcion = "1.- Monedas con valor actual superior a 50€ ordenadas alfabéticamente",
                Valores = list,
            });
        }

        [HttpGet("2")]
        public async Task<ActionResult> Query2()
        {
            var list = await db.Contrato.GroupBy(c => c.CarteraId).Select(c => new
            {
                CarteraId = c.Key,
                TotalMonedas = c.Count()
            }).Where(c => c.TotalMonedas > 2).ToListAsync();

            return Ok(new
            {
                Id = "2",
                Descripcion = "2.- Carteras con más de 2 monedas contratadas",
                Valores = list,
            });
        }

        [HttpGet("3")]
        public async Task<ActionResult> Query3()
        {
            var list = await db.Cartera.GroupBy(cartera => cartera.Exchange).Select(f => new
            {
                Exchange = f.Key,
                TotalCarteras = f.Count()
            }).OrderByDescending(f => f.TotalCarteras).ToListAsync();

            return Ok(new
            {
                Id = "3",
                Descripcion = "3.- Exchanges ordenados por números de carteras",
                Valores = list,
            });
        }

        [HttpGet("4")]
        public async Task<ActionResult> Query4()
        {
            var list = await db.Contrato.Join(db.Cartera, Contrato => Contrato.CarteraId, Cartera => Cartera.CarteraId, (Contrato, Cartera) => new { Contrato = Contrato, Cartera = Cartera })
            .GroupBy(join => join.Cartera.Exchange)
            .Select(join => new { Exchange = join.Key, TotalMonedas = join.Count() })
            .OrderByDescending(join => join.TotalMonedas)
            .ToListAsync();

            return Ok(new
            {
                Id = "4",
                Descripcion = "4.- Exchanges ordenados por cantidad de monedas",
                Valores = list,
            });
        }

        [HttpGet("5")]
        public async Task<ActionResult> Query5()
        {
            var list = await db.Contrato.Join(db.Moneda, Contrato => Contrato.MonedaId, Moneda => Moneda.MonedaId, (Contrato, Moneda) => new { Contrato = Contrato, Moneda = Moneda })
            // .GroupBy(join => join.Cartera.Exchange)
            .Select(join =>
                new
                {
                    Moneda = join.Moneda.MonedaId,
                    Contrato = join.Moneda.MonedaId + join.Contrato.Cantidad,
                    ValorContrato = $"{join.Moneda.Actual * join.Contrato.Cantidad}')"
                })
            // .OrderByDescending(join => join.Va)
            .ToListAsync();

            return Ok(new
            {
                Id = "5",
                Descripcion = "5.- Monedas en contratos ordenadas por valor total actual",
                Valores = list,
            });
        }

        [HttpGet("6")]
        public async Task<ActionResult> Query6()
        {
            // var list = await db.Moneda.SelectMany(m=>m.Con)
            var list = await db.Contrato.Join(db.Moneda, Contrato => Contrato.MonedaId, Moneda => Moneda.MonedaId, (Contrato, Moneda) => new { Contrato = Contrato, Moneda = Moneda })
            .GroupBy(join => join.Moneda)
            .Select(join => new
            {
                Moneda = join.Key.MonedaId,
                ValorTotal = join.Sum(j => j.Moneda.Actual),
            }).ToListAsync();

            return Ok(new
            {
                Id = "6",
                Descripcion = "6.- Monedas en contratos ordenadas por valor actual total en todos los contratos",
                Valores = list,
            });
        }

        // [HttpGet("7")]
        // public async Task<ActionResult> Query7()
        // {
        //     var list = await db.Contrato.Select().ToListAsync();

        //     return Ok(new
        //     {
        //         Id="7",
        //         Descripcion = "7.- Idem contando en cuantos contratos aparecen y ordenado por número de contratos",
        //         Valores = list,
        //     });
        // }
        // [HttpGet("8")]
        // public async Task<ActionResult> Query8()
        // {
        //     var list = await db.Contrato.Select().ToListAsync();

        //     return Ok(new
        //     {
        //         Id="8",
        //         Descripcion = "8.- Idem pero con Exchanges ordenados por valor total",
        //         Valores = list,
        //     });
        // }
        // [HttpGet("9")]
        // public async Task<ActionResult> Query9()
        // {
        //     var list = await db.Contrato.Select().ToListAsync();

        //     return Ok(new
        //     {
        //         Id="9",
        //         Descripcion = "9.- Las Contratos y Monedas de Binance con monedas cuyo valor actual es inferir al 90% del valor máximo",
        //         Valores = list,
        //     });
        // }
    }
}

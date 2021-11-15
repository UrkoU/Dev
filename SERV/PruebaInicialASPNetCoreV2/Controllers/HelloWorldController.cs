using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        // 
        // GET: /HelloWorld/

        public IActionResult Index()
        {
            return View();
        }

        // GET: /HelloWorld/Welcome/ 
        // Requires using System.Text.Encodings.Web;
        public IActionResult Welcome(string name, string name2, int numTimes = 1, int? id = 88)
        {
            ViewData["Message"] = "Hello " + name + " and " + name2;
            ViewData["NumTimes"] = numTimes;
            return View();
        }

        public string Saludos(int? id)
        {
            return "Hola..." + id;
        }
    }
}
using System;
using System.Data.SqlClient;
using System.Data;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using NW = Newtonsoft.Json;
using System.Web;

//using System.Data.Entity.Migrations;

namespace DatosTiempo
{
    class Program
    {


        public static string _path = "ciudades.json";
        static void Main(string[] args)
        {
            // MainAsync().GetAwaiter().GetResult();
            Actualizar().Wait();
        }
        // private static async Task MainAsync()
        // {




        //     /*
        //     var counter = 0;
        //     while (true)
        //     {
        //         Actualizar();
        //         Console.WriteLine($"Counter: {++counter}");
        //         await Task.Delay(10000);
        //     }
        //     */
        //     Actualizar();
        // }

        async static Task Actualizar()
        {
            var client = new HttpClient();
            var metereologia = GetMeteorologia();
            var metParseada = DeserializarArchivoJson(metereologia);
            var i = 0;
            foreach (var ciudad in metParseada)
            {
                Console.WriteLine(ciudad);
                var url = $"http://api.openweathermap.org/data/2.5/weather?q={ciudad},es&appid=5b3cf2c5020847c31ac6d5e9010c4b24";
                //Esperamos a recibir la respuesta de la API
                HttpResponseMessage respuestaHttp = await client.GetAsync(url);
                // Console.WriteLine(respuestaHttp);
                //Esperamos a recibir el contenido de la respuesta
                var sRespMeteorologia = await respuestaHttp.Content.ReadAsStringAsync();
                //Parseamos la respuesta de string a objeto json
                dynamic jsonObjectMeteorologia = NW.JsonConvert.DeserializeObject(sRespMeteorologia);
                Console.WriteLine(jsonObjectMeteorologia);
                i++;
                if (i % 50 == 0)
                {
                    Console.WriteLine("Esperar un minuto para hacer más llamadas");
                    System.Threading.Thread.Sleep(60000);
                }
            }
        }

        public static string GetMeteorologia()
        {
            string meteorologias;
            using (var reader = new StreamReader(_path))
            {
                meteorologias = reader.ReadToEnd();

            }
            return meteorologias;
        }

        public static string[] DeserializarArchivoJson(string archivoJson)
        {
            var contacts = JsonConvert.DeserializeObject<string[]>(archivoJson);

            return contacts;
        }
    }
}

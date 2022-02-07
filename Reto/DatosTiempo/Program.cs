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
using System.Globalization;

namespace DatosTiempo
{
    class Program
    {
        public static string _path = "ciudades.json";
        static void Main(string[] args)
        {
            while (true)
            {
                Actualizar().Wait();
                Console.WriteLine("Cooldown de 3 minutos para actualizar datos");
                System.Threading.Thread.Sleep(180000);
            }
        }

        private async static Task Actualizar()
        {
            var client = new HttpClient();
            var ciudades = GetCiudades();
            var ciudadesParseadas = DeserializarArchivoJson(ciudades);
            var i = 0;

            using (var db = new DatosContext())
            {
                //GENERADOR DE LA TABLA CON LAS COORDENADAS
                try
                {
                    foreach (var ciudad in ciudadesParseadas)
                    {
                        var key = "f43e142eed6e87e4db851249359cb464";
                        var url = $"http://api.openweathermap.org/data/2.5/weather?q={ciudad},es&appid={key}";
                        //Esperamos a recibir la respuesta de la API
                        HttpResponseMessage respuestaHttp = await client.GetAsync(url);
                        // Console.WriteLine(respuestaHttp);
                        //Esperamos a recibir el contenido de la respuesta
                        var sRespMeteorologia = await respuestaHttp.Content.ReadAsStringAsync();
                        //Parseamos la respuesta de string a objeto json
                        dynamic jsonObjectMeteorologia = NW.JsonConvert.DeserializeObject(sRespMeteorologia);
                        // La temperatura viene en Kelvin, la pasamos aquí a Celsius
                        // Convertimos la temperatura a decimal, la pasamos a Celsius, la truncamos y la convertimos a string
                        // Bienvenidos a la orientación a objetos
                        var temperatura = (Math.Truncate((double)Convert.ToDecimal(jsonObjectMeteorologia.main.temp, new CultureInfo("en-US")) - 273.15)).ToString();
                        var sensacionTermica = (Math.Truncate((double)Convert.ToDecimal(jsonObjectMeteorologia.main.feels_like, new CultureInfo("en-US")) - 273.15)).ToString();
                        var id = $"{jsonObjectMeteorologia.name.ToString().Substring(0, 2)}{jsonObjectMeteorologia.id}";
                        // Creamos un objeto meteorologia, que añadimos a la bd si no existe

                        if (db.MeteorologiaItem.Any(e => e.Codigo == id))
                        {
                            var meteorologia = new Meteorologia
                            {
                                Codigo = id,
                                Nombre = jsonObjectMeteorologia.name,
                                Latitud = jsonObjectMeteorologia.coord.lat,
                                Longitud = jsonObjectMeteorologia.coord.lon,
                                Descripcion = jsonObjectMeteorologia.weather[0].main,
                                Temperatura = temperatura,
                                SensacionTermica = sensacionTermica,
                                Humedad = jsonObjectMeteorologia.main.humidity,
                                VelocidadViento = jsonObjectMeteorologia.wind.speed,
                                DireccionViento = jsonObjectMeteorologia.wind.deg,
                                HoraAmanecer = jsonObjectMeteorologia.sys.sunrise,
                                HoraAtardecer = jsonObjectMeteorologia.sys.sunset,
                                PresionAtmosferica = jsonObjectMeteorologia.main.pressure,
                            };
                            var local = db.Set<Meteorologia>()
                                .Local
                                .FirstOrDefault(entry => entry.Codigo.Equals(id));

                            // check if local is not null 
                            if (local != null)
                            {
                                // detach
                                db.Entry(local).State = EntityState.Detached;
                            }
                            // set Modified flag in your entry
                            db.Entry(meteorologia).State = EntityState.Modified;

                            // save 
                            db.SaveChanges();
                        }
                        // Insertar
                        else
                        {
                            var meteorologia = new Meteorologia
                            {
                                Codigo = id,
                                Nombre = jsonObjectMeteorologia.name,
                                Latitud = jsonObjectMeteorologia.coord.lat,
                                Longitud = jsonObjectMeteorologia.coord.lon,
                                Descripcion = jsonObjectMeteorologia.weather[0].main,
                                Temperatura = temperatura,
                                SensacionTermica = sensacionTermica,
                                Humedad = jsonObjectMeteorologia.main.humidity,
                                VelocidadViento = jsonObjectMeteorologia.wind.speed,
                                DireccionViento = jsonObjectMeteorologia.wind.deg,
                                HoraAmanecer = jsonObjectMeteorologia.sys.sunrise,
                                HoraAtardecer = jsonObjectMeteorologia.sys.sunset,
                                PresionAtmosferica = jsonObjectMeteorologia.main.pressure,
                            };
                            db.MeteorologiaItem.Add(meteorologia);
                        }
                        db.SaveChanges();
                        i++;
                        //cada 50 llamadas espera un minuto para no sobrepasar las 60 llamadas por min
                        if (i % 50 == 0)
                        {
                            db.SaveChanges();
                            Console.WriteLine("Esperar un minuto para hacer más llamadas");
                            System.Threading.Thread.Sleep(60000);
                        }}
                    db.SaveChanges();
                }

                catch (SqlException e)
                {
                    Console.WriteLine(e.Message);
                }
            }

        }

        public static string GetCiudades()
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
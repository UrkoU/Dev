using System;
using System.Data.SqlClient;
using System.Data;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
//using System.Data.Entity.Migrations;

namespace DatosTiempo
{
    class Program {   

        public static string _path = "Balizas.json";
        static void Main(string[] args) {
            MainAsync().GetAwaiter().GetResult();
        }
        private static async Task MainAsync(){

            var counter = 0;
            // var max = args.Length != 0 ? Convert.ToInt32(args[0]) : -1;
            while (true)
            {
                Actualizar();
                Console.WriteLine($"Counter: {++counter}");
                await Task.Delay(10000);
            }
        }
        public static DateTime Now { get; }

        private static void Actualizar()
        {
            var balizas = GetBalizas();

            var balizasParseadas = DeserializarArchivoJson(balizas);
            var random = new Random();
            using (var db = new DatosContext())
            {

                //GENERADOR DE LA TABLA CON LAS COORDENADAS
                try
                {
                    foreach (var item in balizasParseadas)
                    {   
                        // Update
                        if (db.BalizaItem.Any(e => e.Codigo == item.Codigo)) {
                            db.Entry(item).State = EntityState.Modified;
                        }
                        // Insertar
                        else{
                            db.BalizaItem.Add(item);
                        }
                    db.SaveChanges();
                    }

                    Console.WriteLine("Se han guardado las coordenadas en la base de datos");
                }
                catch(SqlException e)
                {
                    Console.WriteLine(e.Message);
                }

                //GENERADOR DE LA TABLA CON LOS DATOS METEOROLOGICOS
                try
                {
                    foreach (var item in balizasParseadas)
                    {   
                        // Para obtener el tiempo al momento

                        DateTime date = DateTime.Now;
                        // Update
                        if (db.TiempoItem.Any(e => e.CodigoBaliza == item.Codigo)) {
                            
                            var tiempoNuevo = (new TiempoItem {CodigoBaliza=item.Codigo, Nombre=item.Nombre, Municipio=item.Municipio, Fecha=date, Temperatura=random.Next(-5, 40), Humedad=random.Next(0,100),VelocidadViento=random.Next(0,150), PrecipitacionAcumulada=random.Next(0,300)});
                            var local = db.Set<TiempoItem>()
                                .Local
                                .FirstOrDefault(entry => entry.CodigoBaliza.Equals(item.Codigo));

                            // check if local is not null 
                            if (local != null)
                            {
                                // detach
                                db.Entry(local).State = EntityState.Detached;
                            }
                            // set Modified flag in your entry
                            db.Entry(tiempoNuevo).State = EntityState.Modified;

                            // save 
                            db.SaveChanges();
                        }
                        // Insertar
                        else{
                            var tiempoNuevo = (new TiempoItem {CodigoBaliza=item.Codigo, Nombre=item.Nombre, Municipio=item.Municipio, Fecha=date, Temperatura=random.Next(-5, 40), Humedad=random.Next(0,100),VelocidadViento=random.Next(0,150), PrecipitacionAcumulada=random.Next(0,300)});
                            db.TiempoItem.Add(tiempoNuevo);
                        }
                    db.SaveChanges();
                    }

                    Console.WriteLine("Se han guardado los datos meteorologicos en la base de datos");
                }
                catch(SqlException e)
                {
                    Console.WriteLine(e.Message);
                }
            }    
        
        }

        public static string GetBalizas()
        {
            string balizas;

            using(var reader = new StreamReader(_path))
            {
                balizas = reader.ReadToEnd();

            }
            return balizas;
        }

        public static List<BalizaItem> DeserializarArchivoJson(string balizasDesdeLocal)
        {
            var contacts = JsonConvert.DeserializeObject<List<BalizaItem>>(balizasDesdeLocal);

            return contacts;
        }
    }
}

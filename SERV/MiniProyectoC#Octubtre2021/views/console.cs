using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;


namespace UI.Consola
{
    using System;
    using Negocio;
    using Negocio.Modelos;

    // MascotaDTO para la vista
    using UI;
    public class Controlador
    {
        private GestorDeMascotas sistema;
        private View view;
        private Dictionary<string, Action> casosDeUso;

        public Controlador(GestorDeMascotas sistema, View view)
        {
            this.sistema = sistema;
            this.view = view;
            // c# Action, Func, Predicate: programación funcional
            // c# Dictionary Colección genérica
            this.casosDeUso = new Dictionary<string, Action>(){
                // Action = Func sin valor de retorno
                { "Obtener los propietarios", ObtenerPropietarios },
                { "Obtener los mascotas RAW", ObtenerMascotas },
                { "Obtener los mascotas", ObtenerMascotasDTO },
                { "Adoptar una mascota", AdoptarMascota },
                { "Mascotas perro con propietario Chico", MascotasPerroConDueño },
                { "Gatas con dueñas (predicado)",MascotasSelectasYLambdaComoParametro },
            };
        }

        public void Run()
        {
            view.LimpiarPantalla();
            // Acceso a las Claves del diccionario
            var menu = casosDeUso.Keys.ToList<String>();
            while (true)
                try
                {
                    // Menu
                    var key = view.TrySeleccionarOpcionDeListaEnumerada("Menu de Usuario", menu, "Seleciona una opción");
                    // Ejecución de la opción escogida
                    view.LimpiarPantalla();
                    view.MuestraTitulo(key);
                    casosDeUso[key].Invoke();

                    view.MuestraLineYEsperaReturn("Pulsa <Return> para continuar");
                    view.LimpiarPantalla();
                }
                catch { return; }
        }

        // CASOS DE USO
        private void ObtenerPropietarios() =>
            view.MostrarListaEnumerada("Todos los Propietarios", sistema.ObtenerPropietarios());
        void ObtenerMascotas() =>
            view.MostrarListaEnumerada("Todos las Mascotas", sistema.ObtenerMascotas());
        void ObtenerMascotasDTO()
        {
            var propietarios = sistema.ObtenerPropietarios();
            var mascotas = sistema.ObtenerMascotas();
            var query = from dueño in propietarios
                        join mascota in mascotas on dueño.Id equals mascota.Owner
                        select new PetMV { Owner = dueño.Name, Name = mascota.Name, Type = mascota.Type };

            view.MostrarListaEnumerada("Todos las Mascotas", query.ToList());
        }

        void AdoptarMascota()
        {
            try
            {
                var propietario = view.TrySeleccionarOpcionDeListaEnumerada("Comprador de mascota", sistema.ObtenerPropietarios(), "Escoje un comprador");
                var nombre = view.TryObtenerEntradaDeTipo<string>("¿Cómo se llama la mascota?");
                var especie = view.TryObtenerEntradaDeTipo<string>("Indicame la especie");
                var hecho = sistema.AdoptarMascota(propietario, new Pet { Name = nombre, Type = especie });
                view.MuestraMensaje(hecho ? "Mascota felizmente adquirida" : "Operación no permitida");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return;
            }
        }

        void MascotasPerroConDueño()
        {
            // Linq con selección WHERE expecífica
            var propietarios = sistema.ObtenerPropietarios();
            var mascotas = sistema.ObtenerMascotas();
            var query = from dueño in propietarios
                        join mascota in mascotas on dueño.Id equals mascota.Owner
                        where dueño.Genre == 'H' & mascota.Type == "perro"
                        select new PetMV { Owner = dueño.Name, Name = mascota.Name, Type = mascota.Type };
            view.MostrarListaEnumerada("Mascotas con dueño chico", query.ToList());
        }

        // Idem con Funcion de seleccion lambda 
        void MascotasSelectasYLambdaComoParametro()
        {
            MascotasEsCogidas("Super gatas con Dueña", (Owner o, Pet p) => o.Genre == 'M' && p.Type == "gato");
        }
        void MascotasEsCogidas(String title, Func<Owner, Pet, bool> esLaEscogida)
        {
            var propietarios = sistema.ObtenerPropietarios();
            var mascotas = sistema.ObtenerMascotas();
            var query = from dueño in propietarios
                        join mascota in mascotas on dueño.Id equals mascota.Owner
                        where esLaEscogida(dueño, mascota)
                        select new PetMV { Owner = dueño.Name, Name = mascota.Name, Type = mascota.Type };
            view.MostrarListaEnumerada(title, query.ToList());
        }

        void PruebasDeObtenerEntradaDeTipo()
        {
            try
            {
                var s = view.TryObtenerEntradaDeTipo<string>("un string");
                Console.WriteLine($"Recibido: {s}");
                var d = view.TryObtenerEntradaDeTipo<decimal>("un decimal");
                Console.WriteLine($"Recibido: {d}");
                var f = view.TryObtenerEntradaDeTipo<float>("un float");
                Console.WriteLine($"Recibido: {f}");
                var i = view.TryObtenerEntradaDeTipo<int>("un int");
                Console.WriteLine($"Recibido: {i}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return;
            }
        }
    }
}
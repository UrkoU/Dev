using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;


namespace Servicios
{
    using Negocio.Modelos;

    public interface IRepositorio
    {
        void Inicializar();
        List<Owner> LoadOwners();
        List<Pet> LoadPets();

    }
}
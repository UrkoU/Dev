using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;


namespace Servicios
{
    using Negocio.Modelos;

    public class RepositorioCSV : IRepositorio
    {
        const string dataPath  = "db-data/";
        string propietariosFile  = dataPath +"owners.csv";
        string mascotasFile = dataPath +"pets.csv";
        void IRepositorio.Inicializar(){}
        List<Owner> IRepositorio.LoadOwners()
        {
            return File.ReadAllLines(propietariosFile)
                .Skip(1)
                .Where(row => row.Length > 0)
                .Select(p=>Owner.ParseRow(p)).ToList();
        }
        List<Pet> IRepositorio.LoadPets() =>
            File.ReadAllLines(mascotasFile)
                .Skip(1)
                .Where(row => row.Length > 0)
                .Select(Pet.ParseRow).ToList();
    }
}
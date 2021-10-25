using System;
using System.Collections.Generic;
using System.Linq;


using Servicios;

namespace Negocio
{
    using Negocio.Modelos;

    public class GestorDeMascotas
    {
        IRepositorio Repositorio;
        List<Owner> cachePropietarios = new();
        List<Pet> cacheMascotas = new();

        public GestorDeMascotas(IRepositorio repositorio)
        {
            Repositorio = repositorio;
            Repositorio.Inicializar();
            cachePropietarios = Repositorio.LoadOwners();
            cacheMascotas = Repositorio.LoadPets();
        }
        public List<Owner> ObtenerPropietarios() => cachePropietarios;
        public List<Pet> ObtenerMascotas() => cacheMascotas;
        public bool AdoptarMascota(Owner owner, Pet pet)
        {
            pet.Owner = owner.Id;
            cacheMascotas.Add(pet);
            return true;
        }
    }
}
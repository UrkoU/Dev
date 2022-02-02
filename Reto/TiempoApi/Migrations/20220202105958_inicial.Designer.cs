﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace TiempoApi.Migrations
{
    [DbContext(typeof(DatosContext))]
    [Migration("20220202105958_inicial")]
    partial class inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Meteorologia", b =>
                {
                    b.Property<string>("Codigo")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DireccionViento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoraAmanecer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoraAtardecer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Humedad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Latitud")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Longitud")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PresionAtmosferica")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SensacionTermica")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Temperatura")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VelocidadViento")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codigo");

                    b.ToTable("MeteorologiaItem");
                });

            modelBuilder.Entity("OpcionesUsuario", b =>
                {
                    b.Property<int>("IdUsuario")
                        .HasColumnType("int");

                    b.Property<string>("CodigoBaliza")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("DireccionViento")
                        .HasColumnType("bit");

                    b.Property<bool>("HoraAmanecer")
                        .HasColumnType("bit");

                    b.Property<bool>("HoraAtardecer")
                        .HasColumnType("bit");

                    b.Property<bool>("Humedad")
                        .HasColumnType("bit");

                    b.Property<bool>("PresionAtmosferica")
                        .HasColumnType("bit");

                    b.Property<bool>("SensacionTermica")
                        .HasColumnType("bit");

                    b.Property<bool>("Temperatura")
                        .HasColumnType("bit");

                    b.Property<bool>("VelocidadViento")
                        .HasColumnType("bit");

                    b.HasKey("IdUsuario", "CodigoBaliza");

                    b.ToTable("OpcionesUsuarioItem");
                });

            modelBuilder.Entity("TiempoApi.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasMaxLength(450)
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("Username")
                        .IsUnique()
                        .HasFilter("[Username] IS NOT NULL");

                    b.ToTable("UsuarioItem");
                });
#pragma warning restore 612, 618
        }
    }
}

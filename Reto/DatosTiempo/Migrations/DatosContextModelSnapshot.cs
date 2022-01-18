﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DatosTiempo.Migrations
{
    [DbContext(typeof(DatosContext))]
    partial class DatosContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("BalizaItem", b =>
                {
                    b.Property<string>("Codigo")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Fechacreacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LATWGS84")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LONWGS84")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Municipio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Provincia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("URLamigable")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("URLfisica")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("XMLdatos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("XMLmetadatos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZIP")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codigo");

                    b.ToTable("BalizaItem");
                });

            modelBuilder.Entity("TiempoItem", b =>
                {
                    b.Property<string>("CodigoBaliza")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("Fecha")
                        .HasColumnType("datetime2");

                    b.Property<int>("Humedad")
                        .HasColumnType("int");

                    b.Property<string>("Municipio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PrecipitacionAcumulada")
                        .HasColumnType("int");

                    b.Property<int>("Temperatura")
                        .HasColumnType("int");

                    b.Property<int>("VelocidadViento")
                        .HasColumnType("int");

                    b.HasKey("CodigoBaliza");

                    b.ToTable("TiempoItem");
                });
#pragma warning restore 612, 618
        }
    }
}

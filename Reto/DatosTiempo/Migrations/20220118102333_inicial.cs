using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatosTiempo.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BalizaItem",
                columns: table => new
                {
                    Codigo = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Tipo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fechacreacion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LATWGS84 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LONWGS84 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Municipio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Provincia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    URLamigable = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    URLfisica = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    XMLdatos = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    XMLmetadatos = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ZIP = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BalizaItem", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "TiempoItem",
                columns: table => new
                {
                    CodigoBaliza = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Municipio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Fecha = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Temperatura = table.Column<int>(type: "int", nullable: false),
                    Humedad = table.Column<int>(type: "int", nullable: false),
                    VelocidadViento = table.Column<int>(type: "int", nullable: false),
                    PrecipitacionAcumulada = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiempoItem", x => x.CodigoBaliza);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BalizaItem");

            migrationBuilder.DropTable(
                name: "TiempoItem");
        }
    }
}

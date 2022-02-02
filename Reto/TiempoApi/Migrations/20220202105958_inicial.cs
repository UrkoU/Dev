using Microsoft.EntityFrameworkCore.Migrations;

namespace TiempoApi.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MeteorologiaItem",
                columns: table => new
                {
                    Codigo = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Latitud = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Longitud = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Temperatura = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SensacionTermica = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Humedad = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VelocidadViento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DireccionViento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HoraAmanecer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HoraAtardecer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PresionAtmosferica = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeteorologiaItem", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "OpcionesUsuarioItem",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(type: "int", nullable: false),
                    CodigoBaliza = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Temperatura = table.Column<bool>(type: "bit", nullable: false),
                    SensacionTermica = table.Column<bool>(type: "bit", nullable: false),
                    Humedad = table.Column<bool>(type: "bit", nullable: false),
                    VelocidadViento = table.Column<bool>(type: "bit", nullable: false),
                    DireccionViento = table.Column<bool>(type: "bit", nullable: false),
                    HoraAmanecer = table.Column<bool>(type: "bit", nullable: false),
                    HoraAtardecer = table.Column<bool>(type: "bit", nullable: false),
                    PresionAtmosferica = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OpcionesUsuarioItem", x => new { x.IdUsuario, x.CodigoBaliza });
                });

            migrationBuilder.CreateTable(
                name: "UsuarioItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioItem", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UsuarioItem_Username",
                table: "UsuarioItem",
                column: "Username",
                unique: true,
                filter: "[Username] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MeteorologiaItem");

            migrationBuilder.DropTable(
                name: "OpcionesUsuarioItem");

            migrationBuilder.DropTable(
                name: "UsuarioItem");
        }
    }
}

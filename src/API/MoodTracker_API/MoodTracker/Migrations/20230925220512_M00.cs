using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoodTracker.Migrations
{
    /// <inheritdoc />
    public partial class M00 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Humor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Humor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NomeAlt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Username);
                });

            migrationBuilder.CreateTable(
                name: "NotaMensal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Usuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UsuariosUsername = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotaMensal", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NotaMensal_Usuarios_UsuariosUsername",
                        column: x => x.UsuariosUsername,
                        principalTable: "Usuarios",
                        principalColumn: "Username");
                });

            migrationBuilder.CreateTable(
                name: "Registros",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titulo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Texto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HumorId = table.Column<int>(type: "int", nullable: false),
                    RegFeliz = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegTriste = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Usuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UsuariosUsername = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registros", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Registros_Humor_HumorId",
                        column: x => x.HumorId,
                        principalTable: "Humor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Registros_Usuarios_UsuariosUsername",
                        column: x => x.UsuariosUsername,
                        principalTable: "Usuarios",
                        principalColumn: "Username");
                });

            migrationBuilder.CreateIndex(
                name: "IX_NotaMensal_UsuariosUsername",
                table: "NotaMensal",
                column: "UsuariosUsername");

            migrationBuilder.CreateIndex(
                name: "IX_Registros_HumorId",
                table: "Registros",
                column: "HumorId");

            migrationBuilder.CreateIndex(
                name: "IX_Registros_UsuariosUsername",
                table: "Registros",
                column: "UsuariosUsername");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NotaMensal");

            migrationBuilder.DropTable(
                name: "Registros");

            migrationBuilder.DropTable(
                name: "Humor");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}

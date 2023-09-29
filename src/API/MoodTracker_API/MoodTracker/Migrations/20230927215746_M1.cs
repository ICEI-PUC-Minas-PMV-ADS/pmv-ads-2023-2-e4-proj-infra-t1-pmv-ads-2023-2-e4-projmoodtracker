using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoodTracker.Migrations
{
    /// <inheritdoc />
    public partial class M1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotaMensal_Usuarios_UsuariosUsername",
                table: "NotaMensal");

            migrationBuilder.DropForeignKey(
                name: "FK_Registros_Usuarios_UsuariosUsername",
                table: "Registros");

            migrationBuilder.DropIndex(
                name: "IX_Registros_UsuariosUsername",
                table: "Registros");

            migrationBuilder.DropIndex(
                name: "IX_NotaMensal_UsuariosUsername",
                table: "NotaMensal");

            migrationBuilder.DropColumn(
                name: "UsuariosUsername",
                table: "Registros");

            migrationBuilder.DropColumn(
                name: "UsuariosUsername",
                table: "NotaMensal");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UsuariosUsername",
                table: "Registros",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UsuariosUsername",
                table: "NotaMensal",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Registros_UsuariosUsername",
                table: "Registros",
                column: "UsuariosUsername");

            migrationBuilder.CreateIndex(
                name: "IX_NotaMensal_UsuariosUsername",
                table: "NotaMensal",
                column: "UsuariosUsername");

            migrationBuilder.AddForeignKey(
                name: "FK_NotaMensal_Usuarios_UsuariosUsername",
                table: "NotaMensal",
                column: "UsuariosUsername",
                principalTable: "Usuarios",
                principalColumn: "Username");

            migrationBuilder.AddForeignKey(
                name: "FK_Registros_Usuarios_UsuariosUsername",
                table: "Registros",
                column: "UsuariosUsername",
                principalTable: "Usuarios",
                principalColumn: "Username");
        }
    }
}

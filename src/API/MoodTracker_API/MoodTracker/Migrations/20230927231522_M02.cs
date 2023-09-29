using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoodTracker.Migrations
{
    /// <inheritdoc />
    public partial class M02 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Registros_Humor_HumorId",
                table: "Registros");

            migrationBuilder.DropIndex(
                name: "IX_Registros_HumorId",
                table: "Registros");

            migrationBuilder.RenameColumn(
                name: "HumorId",
                table: "Registros",
                newName: "Humor");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Humor",
                table: "Registros",
                newName: "HumorId");

            migrationBuilder.CreateIndex(
                name: "IX_Registros_HumorId",
                table: "Registros",
                column: "HumorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Registros_Humor_HumorId",
                table: "Registros",
                column: "HumorId",
                principalTable: "Humor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

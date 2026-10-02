using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<PortfolioContext>(options =>
    options.UseSqlite("Data Source=portfolio.db"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PortfolioContext>();
    if (!db.Proyectos.Any())
    {
        db.Proyectos.AddRange(
            new Proyecto
            {
                Titulo = "Mi Portafolio",
                Descripcion = "Web de presentación personal, con backend en .NET y frontend en React.",
                Tecnologias = "C#, ASP.NET Core, React, TypeScript",
                UrlRepo = "https://github.com/tuusuario/portfolio"
            },
            new Proyecto
            {
                Titulo = "Proyecto de ejemplo",
                Descripcion = "Breve descripción de qué hace este proyecto.",
                Tecnologias = "Java, Spring Boot, MySQL",
                UrlRepo = "https://github.com/tuusuario/proyecto2"
            }
        );
        db.SaveChanges();
    }
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowReact");
app.UseHttpsRedirection();

app.MapGet("/api/proyectos", async (PortfolioContext db) =>
{
    var proyectos = await db.Proyectos.ToListAsync();
    return Results.Ok(proyectos);
});

app.MapPost("/api/contacto", (ContactoRequest request) =>
{
    Console.WriteLine($"Contacto recibido de {request.Nombre} ({request.Email}): {request.Mensaje}");
    return Results.Ok(new { mensaje = "Mensaje recibido correctamente" });
});

app.Run();

record ContactoRequest(string Nombre, string Email, string Mensaje);
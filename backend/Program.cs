using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.Models;
using Portfolio.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<PortfolioContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

builder.Services.AddScoped<EmailService>();

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
                Descripcion = "Web de presentación personal, con backend en .NET + SQLite y frontend en React.",
                Tecnologias = "C#, ASP.NET Core,SQLite, React, TypeScript",
                UrlRepo = "https://gitlab.com/portafolio2640140/portafolio"
            },
            new Proyecto
            {
                Titulo = "Age of Silence",
                Descripcion = "Proyecto de 6 meses de fin de grado hecho en Unity 3D",
                Tecnologias = "C#, Unity 6",
                UrlRepo = "https://gitlab.com/ipalominof3/age-of-silence"
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

app.MapPost("/api/contacto", async (ContactoRequest request, EmailService emailService) =>
{
    try
    {
        await emailService.EnviarMensajeContactoAsync(request.Nombre, request.Email, request.Mensaje);
        return Results.Ok(new { mensaje = "Mensaje enviado correctamente" });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error al enviar email: {ex.Message}");
        return Results.Problem("No se pudo enviar el mensaje");
    }
});
app.Run();

record ContactoRequest(string Nombre, string Email, string Mensaje);
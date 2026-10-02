namespace Portfolio.Api.Models;

public class Proyecto
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Descripcion { get; set; } = string.Empty;
    public string Tecnologias { get; set; } = string.Empty;
    public string? UrlRepo { get; set; }
    public string? UrlDemo { get; set; }
}
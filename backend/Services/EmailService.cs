using MailKit.Net.Smtp;
using MimeKit;

namespace Portfolio.Api.Services;

public class EmailService
{
    private readonly IConfiguration _config;

    public EmailService(IConfiguration config)
    {
        _config = config;
    }

    public async Task EnviarMensajeContactoAsync(string nombre, string email, string mensaje)
    {
        var emailFrom = _config["Email:From"];
        var password = _config["Email:Password"];

        var mensajeEmail = new MimeMessage();
        mensajeEmail.From.Add(MailboxAddress.Parse(emailFrom));
        mensajeEmail.To.Add(MailboxAddress.Parse(emailFrom));
        mensajeEmail.Subject = $"Nuevo mensaje de contacto de {nombre}";
        mensajeEmail.Body = new TextPart("plain")
        {
            Text = $"Nombre: {nombre}\nEmail: {email}\n\nMensaje:\n{mensaje}"
        };

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync("smtp.gmail.com", 587, false);
        await smtp.AuthenticateAsync(emailFrom, password);
        await smtp.SendAsync(mensajeEmail);
        await smtp.DisconnectAsync(true);
    }
}
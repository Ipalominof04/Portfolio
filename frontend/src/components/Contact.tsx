import { useState } from 'react';
import './css/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [enviando, setEnviando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeEstado(null);

    try {
      const response = await fetch('http://localhost:5207/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error en el envío');

      setMensajeEstado('¡Mensaje enviado correctamente!');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      setMensajeEstado('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contacta conmigo</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
      {mensajeEstado && <p className="form-status">{mensajeEstado}</p>}
    </section>
  );
}
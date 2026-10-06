import { useState } from 'react';
import './css/Navbar.css';

interface NavbarProps {
  seccionActiva: string;
  onCambiarSeccion: (seccion: string) => void;
}

export default function Navbar({ seccionActiva, onCambiarSeccion }: NavbarProps) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const items = [
    { id: 'home', label: 'Inicio' },
    { id: 'aboutme', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'habilities', label: 'Skills' },
    { id: 'contact', label: 'Contacto' },
  ];

  const handleClickItem = (id: string) => {
    onCambiarSeccion(id);
    setMenuAbierto(false); // cierra el menú al elegir una sección
  };

  return (
    <nav className="navbar">
      <div className="navbar-desktop">
        {items.map((item) => (
          <button
            key={item.id}
            className={seccionActiva === item.id ? 'active' : ''}
            onClick={() => handleClickItem(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      {menuAbierto && (
        <div className="navbar-mobile">
          {items.map((item) => (
            <button
              key={item.id}
              className={seccionActiva === item.id ? 'active' : ''}
              onClick={() => handleClickItem(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
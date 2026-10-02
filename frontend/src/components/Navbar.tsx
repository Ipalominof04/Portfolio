import './css/Navbar.css';
interface NavbarProps {
  seccionActiva: string;
  onCambiarSeccion: (seccion: string) => void;
}

export default function Navbar({ seccionActiva, onCambiarSeccion }: NavbarProps) {
  const items = [
    { id: 'home', label: 'Inicio' },
    { id: 'aboutme', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contacto' },
  ];

    return (
    <nav className="navbar">
      {items.map((item) => (
        <button
          key={item.id}
          className={seccionActiva === item.id ? 'active' : ''}
          onClick={() => onCambiarSeccion(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
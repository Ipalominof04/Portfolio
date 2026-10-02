import { useEffect, useState } from 'react';
import './css/Projects.css';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  urlRepo?: string;
  urlDemo?: string;
}

export default function Projects() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5207/api/proyectos')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los proyectos');
        return res.json();
      })
      .then((data) => setProyectos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <section id="projects"><p>Cargando proyectos...</p></section>;
  if (error) return <section id="projects"><p>{error}</p></section>;

  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div className="project-card" key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p className="project-description">{proyecto.descripcion}</p>
            <div className="project-tech">
              {proyecto.tecnologias.split(',').map((tech) => (
                <span key={tech} className="tech-badge">{tech.trim()}</span>
              ))}
            </div>
            <div className="project-links">
              {proyecto.urlRepo && (
                <a href={proyecto.urlRepo} target="_blank" rel="noopener noreferrer">
                  Código
                </a>
              )}
              {proyecto.urlDemo && (
                <a href={proyecto.urlDemo} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
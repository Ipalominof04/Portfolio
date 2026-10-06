import './css/Projects.css';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  urlRepo?: string;
  urlDemo?: string;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'Mi Portafolio',
    descripcion: 'Web de presentación personal, hecha con React y TypeScript.',
    tecnologias: 'React, TypeScript, Vite',
    urlRepo: 'https://github.com/tuusuario/portfolio',
  },
  {
    id: 2,
    titulo: 'Proyecto de ejemplo',
    descripcion: 'Breve descripción de qué hace este proyecto.',
    tecnologias: 'Java, Spring Boot, MySQL',
    urlRepo: 'https://github.com/tuusuario/proyecto2',
  },
];

export default function Projects() {
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
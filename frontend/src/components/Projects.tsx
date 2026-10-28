import './css/Projects.css';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  urlRepo?: string;
  urlDemo?: string;
  urlTrailer?: string;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'Mi Portafolio',
    descripcion: 'Web de presentación personal, hecha con React y TypeScript.',
    tecnologias: 'React, TypeScript, Vite',
    urlRepo: 'https://github.com/Ipalominof04/Portfolio.git',
  },
  {
    id: 2,
    titulo: 'Age of Silence',
    descripcion: 'Proyecto final de 6 meses de duración de final de grado de DAMvi (Desarollo de aplicaciones multiplatadormas y videojuegos)',
    tecnologias: 'C#, Unity 6, Json',
    urlRepo: 'https://github.com/Ipalominof04/Age-of-Silence.git',
    urlTrailer: 'https://youtu.be/_EjRUlKGXOY',
  },
  {
    id: 3,
    titulo: 'BANG',
    descripcion: 'Proyecto creado en JAVA con Hibernate y MySQL, para la gestión de un juego de cartas llamado BANG',
    tecnologias: 'JAVA, Hibernate, MySQL',
    urlRepo: 'https://github.com/Ipalominof04/HibernateProject_BANG.git'
  },
  {
    id: 4,
    titulo: 'Albarans Management',
    descripcion: 'Proyecto creado en Python con Django y SQLite, para la gestión de albaranes, clientes, usuario y productos de una empresa',
    tecnologias: 'Python, Django, SQLite',
    urlRepo: 'https://github.com/Ipalominof04/AlbaransManagement.git'
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
              {proyecto.urlTrailer && (
                <a href={proyecto.urlTrailer} target="_blank" rel="noopener noreferrer">
                  Trailer
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
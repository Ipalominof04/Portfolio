import './css/Skills.css';
import {
  SiJavascript, SiSharp, SiPhp, SiMysql, SiPostgresql,
  SiMongodb, SiGit, SiDotnet, SiReact,
  SiJson,
  SiPython,
  SiHtml5,
  SiCss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface Skill {
  nombre: string;
  icono: React.ReactNode;
  color: string;
}

interface Categoria {
  titulo: string;
  skills: Skill[];
}

const categorias: Categoria[] = [
  {
    titulo: 'Backend',
    skills: [
      { nombre: 'Java', icono: <FaJava />, color: '#f89820' },
      { nombre: 'Phyton', icono: <SiPython />, color: '#dff800' },
      { nombre: 'Spring', icono: <SiJavascript />, color: '#6db33f' },
      { nombre: 'C#', icono: <SiSharp />, color: '#239120' },
      { nombre: '.NET', icono: <SiDotnet />, color: '#512bd4' },
      { nombre: 'PHP', icono: <SiPhp />, color: '#777bb4' },
    ],
  },
  {
    titulo: 'Frontend',
    skills: [
      { nombre: 'JavaScript', icono: <SiJavascript />, color: '#f7df1e' },
      { nombre: 'React', icono: <SiReact />, color: '#61dafb' },
      { nombre: 'HTML', icono: <SiHtml5 />, color: '#daa000' },
      { nombre: 'CSS', icono: <SiCss />, color: '#1200b4' },
    ],
  },
  {
    titulo: 'Bases de datos',
    skills: [
      { nombre: 'MySQL', icono: <SiMysql />, color: '#4479a1' },
      { nombre: 'PostgreSQL', icono: <SiPostgresql />, color: '#4169e1' },
      { nombre: 'MongoDB', icono: <SiMongodb />, color: '#47a248' },
    ],
  },
  {
    titulo: 'Herramientas',
    skills: [
      { nombre: 'Git', icono: <SiGit />, color: '#f05032' },
      { nombre: 'Json', icono: <SiJson />, color: '#050505' },
    ],
  },
];

export default function Habilities() {
  return (
    <section id="habilities" className="habilities-section">
      <h2>Habilidades</h2>
      <div className="habilities-categorias">
        {categorias.map((categoria) => (
          <div className="categoria-bloque" key={categoria.titulo}>
            <h3>{categoria.titulo}</h3>
            <div className="skills-grid">
              {categoria.skills.map((skill) => (
                <div className="skill-item" key={skill.nombre}>
                  <div className="skill-circle" style={{ '--skill-color': skill.color } as React.CSSProperties}>
                    {skill.icono}
                  </div>
                  <span className="skill-label">{skill.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
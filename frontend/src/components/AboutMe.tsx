import './css/AboutMe.css';

export default function AboutMe() {
  return (
    <section id="aboutme" className="aboutme-section">
      <h2>Sobre mí</h2>
      <div className="aboutme-content">
        <p>
          Soy desarrollador backend con casi dos años de experiencia, el último
          de ellos centrado especialmente en C#. Mi formación combina{' '}
          <strong>DAM (Desarrollo de Aplicaciones Multiplataforma)</strong> y{' '}
          <strong>SMR (Sistemas Microinformáticos y Redes)</strong>, lo que me
          da una base sólida tanto en programación como en infraestructura.
        </p>
        <p>
          Tengo una especialización en <strong>desarrollo de videojuegos</strong>,
          algo que me aporta una perspectiva distinta a la hora de resolver
          problemas de rendimiento y lógica compleja. He trabajado también en
          soporte IT, mantenimiento de sistemas y coordinación de equipos con{' '}
          <strong>metodología Scrum</strong>.
        </p>
      </div>

      <div className="aboutme-highlights">
        <div className="highlight-card">
          <span className="highlight-number">1,5</span>
          <span className="highlight-label">Años de experiencia</span>
        </div>
        <div className="highlight-card">
          <span className="highlight-number">DAM + SMR</span>
          <span className="highlight-label">Formación técnica</span>
        </div>
        <div className="highlight-card">
          <span className="highlight-number">Scrum</span>
          <span className="highlight-label">Metodología de trabajo</span>
        </div>
      </div>
    </section>
  );
}
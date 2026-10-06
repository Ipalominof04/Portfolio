import './css/Home.css';
import profilePhoto from '../assets/profile.png';

interface HomeProps {
  onCambiarSeccion: (seccion: string) => void;
}

export default function Home({ onCambiarSeccion }: HomeProps) {
  return (
    <section id="home" className="home-section">
      <div className="home-text">
        <p className="home-greeting">Hola, soy Iván,</p>
        <h1>
          Desarrollador<br />Backend
        </h1>
        <p className="home-location">📍 Terrassa, Barcelona.</p>
        <a className="home-cta" onClick={() => onCambiarSeccion('contact')}>Contáctame</a>
      </div>

      <div className="home-photo-wrapper">
        <div className="home-photo-circle">
          <img src={profilePhoto} alt="Iván Palomino Fernández" />
        </div>
        <span className="home-deco home-deco-cross">✦</span>
        <span className="home-deco home-deco-lines">////</span>
      </div>
    </section>
  );
}
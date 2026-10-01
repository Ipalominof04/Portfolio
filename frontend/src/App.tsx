import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Habilities from "./components/Habilities";
import Projects from "./components/Projects";
import Footer from './components/Footer';

function App()
{
      const [seccionActiva, setSeccionActiva] = useState('home');

  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'home': return <Home />;
      case 'aboutme': return <AboutMe />;
      case 'projects': return <Projects />;
      case 'habilities': return <Habilities />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Navbar seccionActiva={seccionActiva} onCambiarSeccion={setSeccionActiva} />
      {renderSeccion()}
      <Footer />
    </>
  );
}
    export default App;
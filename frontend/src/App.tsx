import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from './components/Footer';

function App()
{
      const [seccionActiva, setSeccionActiva] = useState('home');

  const renderSeccion = () => {
    switch (seccionActiva) {
      case 'home': return <Home onCambiarSeccion={setSeccionActiva}/>;
      case 'aboutme': return <AboutMe />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <Home onCambiarSeccion={setSeccionActiva}/>;
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
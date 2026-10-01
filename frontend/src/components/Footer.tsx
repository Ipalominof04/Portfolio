import "./css/Footer.css"

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://gitlab.com/users/ipalominof3/projects" target="_blank" rel="noopener noreferrer">
          GitLab
        </a>
        <a href="https://www.linkedin.com/in/iv%C3%A1n-palomino-fern%C3%A1ndez-8344353a3/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="ipalominof3@gmail.com">Email</a>
      </div>
      <p>&copy; {anioActual} Iván Palomino Fernández</p>
    </footer>
  );
}
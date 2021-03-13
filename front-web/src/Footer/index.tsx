import './styles.css';
// import { ReactComponent as YouTube } from './youtube.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';

function Footer() {
  return (
    <footer className="main-footer">
            Desenvolvido por <a href="https://diegossena.com.br/" target="_new">
                Diego Sena
            </a>
            <div className="footer-icons"></div>
            <a href="https://www.linkedin.com/in/diego-sena-03916b139/" target="_new">
                <Linkedin/>
            </a>
            
            <a href="https://www.instagram.com/diegosena_7/" target="_new">
                <Instagram/>
            </a>
        </footer>
  )
}

export default Footer;
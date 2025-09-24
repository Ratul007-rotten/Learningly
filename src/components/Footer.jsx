import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Learningly</h3>
            <p>La plataforma líder en educación online que conecta estudiantes con los mejores profesores.</p>
          </div>
          
          <div className="footer-section">
            <h4>Estudiantes</h4>
            <ul>
              <li><a href="#">Explorar Clases</a></li>
              <li><a href="#">Mis Cursos</a></li>
              <li><a href="#">Calendario</a></li>
              <li><a href="#">Certificados</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Profesores</h4>
            <ul>
              <li><a href="#">Únete como Tutor</a></li>
              <li><a href="#">Portal de Profesores</a></li>
              <li><a href="#">Recursos</a></li>
              <li><a href="#">Centro de Ayuda</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Soporte</h4>
            <ul>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Términos de Uso</a></li>
              <li><a href="#">Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Learningly. Todos los derechos reservados.</p>
          <div className="footer-badges">
            <span className="badge">Certificado ISO</span>
            <span className="badge">Seguro SSL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
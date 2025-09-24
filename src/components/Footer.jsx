import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TutorHub</h3>
            <p>La plataforma líder en educación online que conecta estudiantes con los mejores profesores.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L4.27 17.94l-1.02-.612 1.162-2.753c-.152-.51-.152-1.050 0-1.56L3.25 10.26l1.02-.612 1.163 2.753c.568-1.07 1.719-1.8 3.016-1.8s2.448.73 3.016 1.8l1.163-2.753 1.02.612-1.162 2.754c.152.51.152 1.050 0 1.56l1.162 2.753-1.02.612-1.163-2.753c-.568 1.07-1.719 1.8-3.016 1.8z"/>
                </svg>
              </a>
            </div>
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
          <p>&copy; 2024 TutorHub. Todos los derechos reservados.</p>
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
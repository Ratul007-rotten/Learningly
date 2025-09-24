import { useLocation, useNavigate } from 'react-router-dom'
import classes from '../data/classes'
import { useClasses } from '../context/ClassesContext'
import './About.css'

export default function About() {
  const location = useLocation()
  const navigate = useNavigate()
  const { joinClass } = useClasses()  // usar contexto para unirse

  const params = new URLSearchParams(location.search)
  const classId = parseInt(params.get('classId'))

  const selectedClass = classes.find(c => c.id === classId)

  if (!selectedClass) return <p>Clase no encontrada</p>

  const goToClass = (newId) => {
    navigate(`/about?classId=${newId}`)
  }

  const handleJoin = () => {
    joinClass(selectedClass)     // añadir la clase al contexto
    navigate('/mis-clases')      // redirigir a Mis Clases
  }

  return (
    <div className="about-container">
      {/* Flecha izquierda */}
      <button 
        className="nav-arrow left"
        onClick={() => goToClass(classId - 1)}
        disabled={classId <= 1}
      >
        ◀
      </button>

      {/* Contenido principal */}
      <div className="class-info">
        <h1>{selectedClass.title}</h1>
        <img src={selectedClass.image} alt={selectedClass.title} />
        <p><strong>Profesor:</strong> {selectedClass.teacher}</p>
        <p><strong>Materia:</strong> {selectedClass.subject}</p>
        <p><strong>Nivel:</strong> {selectedClass.level}</p>
        <p><strong>Calificación:</strong> {selectedClass.rating}</p>
        <p><strong>Estudiantes:</strong> {selectedClass.students}</p>
        
        {selectedClass.nextClass && (
          <p><strong>Próxima clase:</strong> {selectedClass.nextClass}</p>
        )}

        {/* Botón de unirse */}
        <button className="join-btn" onClick={handleJoin}>
          Unirse a la clase
        </button>
      </div>

      {/* Flecha derecha */}
      <button 
        className="nav-arrow right"
        onClick={() => goToClass(classId + 1)}
        disabled={classId >= classes.length}
      >
        ▶
      </button>
    </div>
  )
}

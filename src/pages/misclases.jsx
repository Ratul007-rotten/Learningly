import { useClasses } from '../context/ClassesContext'
import './misclases.css'

export default function MisClases({ sidebarOpen }) {
  const { myClasses } = useClasses()

  return (
    <div className={`misclases-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <h1>Mis Clases</h1>
      {myClasses.length === 0 ? (
        <p>Aún no te has unido a ninguna clase.</p>
      ) : (
        <ul className="misclases-list">
          {myClasses.map(c => (
            <li key={c.id}>
              <img src={c.image} alt={c.title} />
              <div>
                <h2>{c.title}</h2>
                <p>{c.teacher}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

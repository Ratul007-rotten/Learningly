import { useClasses } from '../context/ClassesContext'
import './misclases.css'

export default function MisClases({ sidebarOpen }) {
  const { myClasses } = useClasses()

  return (
    <div className={`misclases-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <h1>Contacto</h1>
      
    </div>
  )
}

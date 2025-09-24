import React from 'react'
import './ClassCard.css'

const ClassCard = ({ classData }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Básico': return '#059669'
      case 'Intermedio': return '#D97706'
      case 'Avanzado': return '#DC2626'
      default: return '#6B7280'
    }
  }

  return (
    <div className="class-card">
      <div className="card-image">
        <img src={classData.image} alt={classData.title} />
        <div className="level-badge" style={{ backgroundColor: getLevelColor(classData.level) }}>
          {classData.level}
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{classData.title}</h3>
          <div className="card-rating">
            <svg viewBox="0 0 24 24" fill="#FCD34D">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <span>{classData.rating}</span>
          </div>
        </div>
        
        <div className="card-teacher">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>{classData.teacher}</span>
        </div>
        
        <div className="card-details">
        
          
          <div className="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>{classData.students} estudiantes</span>
          </div>
        </div>
        
        <div className="card-subject">
          <span className="subject-tag">{classData.subject}</span>
        </div>
        
        <div className="card-footer">
          <div className="next-class">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{classData.nextClass}</span>
          </div>
          
          <button className="join-btn">
            Unirse
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
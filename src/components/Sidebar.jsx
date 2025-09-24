import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
        </svg>
      ),
      label: 'Mis Clases',
      count: 12
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      label: 'Calendario',
      count: 5
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      label: 'Chats',
      count: 8
    }
  ]

  const bottomMenuItem = {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
      </svg>
    ),
    label: 'Contacto'
  }

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>Menú Principal</h2>
            <button className="sidebar-close" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.label}</span>
                    {item.count && <span className="nav-badge">{item.count}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="sidebar-footer">
            <a href="#" className="nav-link contact-link">
              <span className="nav-icon">{bottomMenuItem.icon}</span>
              <span className="nav-text">{bottomMenuItem.label}</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
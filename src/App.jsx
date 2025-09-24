
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="app">
      <Header 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Outlet context={{ sidebarOpen, setSidebarOpen, searchTerm, setSearchTerm }} />
      </main>
      <Footer />
    </div>
  )
}

export default App
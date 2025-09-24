import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ClassCard from './components/ClassCard'
import Footer from './components/Footer'
import './App.css'

const mockClasses = [
  {
    id: 1,
    title: "Matemáticas Avanzadas",
    teacher: "Prof. Ana García",
    subject: "Matemáticas",
    level: "Avanzado",
    rating: 4.8,
    students: 45,
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
  
  },
  {
    id: 2,
    title: "Química Orgánica",
    teacher: "Dr. Carlos Mendez",
    subject: "Química",
    level: "Intermedio",
    rating: 4.7,
    students: 32,
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400",
    nextClass: "Mañana 10:00 AM"
  },
  {
    id: 3,
    title: "Historia Universal",
    teacher: "Lic. María López",
    subject: "Historia",
    level: "Básico",
    rating: 4.9,
    students: 68,
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    nextClass: "Viernes 2:00 PM"
  },
  {
    id: 4,
    title: "Física Cuántica",
    teacher: "Dr. Roberto Silva",
    subject: "Física",
    level: "Avanzado",
    rating: 4.6,
    students: 28,
    image: "https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=400",
    nextClass: "Lunes 11:00 AM"
  },
  {
    id: 5,
    title: "Literatura Española",
    teacher: "Prof. Elena Ruiz",
    subject: "Literatura",
    level: "Intermedio",
    rating: 4.8,
    students: 52,
    image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400",
    nextClass: "Miércoles 4:00 PM"
  },
  {
    id: 6,
    title: "Programación Java",
    teacher: "Ing. David Torres",
    subject: "Programación",
    level: "Avanzado",
    rating: 4.9,
    students: 41,
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
    nextClass: "Hoy 6:00 PM"
  }
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClasses = mockClasses.filter(classItem =>
    classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
        <div className="container">
          <div className="welcome-section">
            <h1>Clases Recomendadas Para Ti</h1>
            <p>Descubre las mejores tutorías adaptadas a tu nivel y necesidades</p>
          </div>
          
          <div className="classes-grid">
            {filteredClasses.map(classItem => (
              <ClassCard 
                key={classItem.id} 
                classData={classItem} 
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
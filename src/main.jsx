import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import App from './App.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Login from './pages/login'
import MisClases from './pages/misclases.jsx'
import Contacto from './pages/contacto.jsx'
import MyCalendar from './pages/calendario.jsx'
import Chat from './pages/chats.jsx'
import { ClassesProvider } from './context/ClassesContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassesProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="mis-clases" element={<MisClases />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="calendario" element={<MyCalendar />} />
            <Route path="chats" element={<Chat />} />
          </Route>

         
          {/* Ruta sin layout */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ClassesProvider>
</StrictMode>
)

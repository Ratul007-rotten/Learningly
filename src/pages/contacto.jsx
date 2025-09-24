import { useState } from 'react'
import './contacto.css'

export default function Contacto({ sidebarOpen }) {

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

    const handleSubmit = async (e) => {

    
    const res = await fetch('http://localhost:4000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const data = await res.json()
    console.log(data) // ver respuesta del servidor
  }

  return (
    <div className={`contacto-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <h1>Formulario de Contacto</h1>
      <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través del siguiente formulario:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" id='name' value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" id='email' value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Asunto:
          <input type="text" name="subject" id='subject' value={formData.subject} onChange={handleChange} required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" id='message' rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit" >Enviar</button>
      </form>
      
    </div>
  )
}

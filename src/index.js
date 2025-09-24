const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json()) // para leer JSON en body
app.use(express.urlencoded({ extended: true })) // para leer datos de formularios

// endpoint para procesar el formulario
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body

  console.log('Datos recibidos:', req.body)

  // Aquí puedes:
  // - Guardar en base de datos (MongoDB, MySQL, etc.)
  // - Enviar correo (con nodemailer)
  // - Procesar como quieras

  res.json({ success: true, msg: 'Formulario recibido correctamente!' })
})

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))

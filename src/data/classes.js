// Este JSON simula datos de clases para propósitos de desarrollo y pruebas.
// En un entorno real, estos datos podrían provenir de una base de datos o una API.
// Para el que este leyendo esto, recuerda que si vas a usar valores de una base de datos procura desenlazar estos datos para evitar problemas.


const classes = [
  {
    id: 1,
    title: "Matemáticas Avanzadas",
    teacher: "Prof. Ana García",
    subject: "Matemáticas",
    level: "Avanzado",
    rating: 4.8,
    students: 45,
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
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

export default classes

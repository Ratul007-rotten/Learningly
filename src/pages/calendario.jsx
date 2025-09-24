import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './calendario.css'

const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const events = [
  {
    title: "Examen de Matemáticas",
    start: new Date(2025, 8, 25, 10, 0),
    end: new Date(2025, 8, 25, 12, 0),
  },
  {
    title: "Reunión de Proyecto",
    start: new Date(2025, 8, 26, 14, 0),
    end: new Date(2025, 8, 26, 15, 0),
  },
  {
    title: "Pollos en el asador",
    start: new Date(2025, 8, 27, 12, 0),
    end: new Date(2025, 8, 27, 13, 0),
  }
];

export default function MyCalendar() {
  return (
    <div className="calendar-container">
      <h1 className="text-xl font-bold mb-2">Mi Calendario</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

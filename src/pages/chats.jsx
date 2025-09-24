import { useState } from "react";
import "./chats.css";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Maestro", text: "¡Hola! ¿En qué puedo ayudarte hoy?" },
    { id: 2, user: "Tú", text: "Quiero probar el chat de ejemplo." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Nuevo mensaje del usuario
    const newMsg = { id: Date.now(), user: "Tú", text: input.trim() };
    setMessages((prev) => [...prev, newMsg]);

    // Simula respuesta automática
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), user: "Profesor", text: "Buenas tardes" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">Chat</h1>
      <div className="messages">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`message ${m.user === "Tú" ? "me" : "other"}`}
          >
            <strong>{m.user}: </strong>{m.text}
          </div>
        ))}
      </div>

      <form className="input-area" onSubmit={handleSend}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe algo…"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
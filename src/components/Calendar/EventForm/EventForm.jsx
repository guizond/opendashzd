import React, { useState, useEffect } from "react";
import './EventForm.css';

const EventForm = ({ onSave, onClose, eventDetails }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (eventDetails) {
      setTitle(eventDetails.title);
      setDescription(eventDetails.description);
      setStart(eventDetails.start);
      setEnd(eventDetails.end);
    }
  }, [eventDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: eventDetails ? eventDetails.id : null, title, description, start, end });
  };

  return (
    <div className="modal">
      <h2>{eventDetails ? "Editar Evento" : "Criar Novo Evento"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => {
            const startValue = e.target.value;
            setStart(startValue);

            // Adiciona 30 minutos no fuso local
            const startDate = new Date(startValue);
            const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutos em ms

            const pad = (num) => String(num).padStart(2, "0");

            const localDateTime = `${endDate.getFullYear()}-${pad(endDate.getMonth() + 1)}-${pad(endDate.getDate())}T${pad(endDate.getHours())}:${pad(endDate.getMinutes())}`;

            setEnd(localDateTime);
          }}
          required
        />
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
        <div className="modal-buttons">
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>Fechar</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
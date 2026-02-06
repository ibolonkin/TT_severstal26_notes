import { useState } from 'react';
import './NoteModal.css';

const NoteModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Создание заметки</h3>

        <label>Название</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Описание</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="modal-actions">
          <button
            onClick={() => {
              onSubmit({ title, description });
              setTitle('');
              setDescription('');
            }}
          >
            Создать
          </button>
          <button onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;

import { useState } from 'react';
import './NoteModal.css';
import { toast } from 'react-toastify';

const NoteModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error('Название заметки не может быть пустым');
      return;
    }
    onSubmit({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    toast.success('Заметка создана!');
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h3>Создание заметки</h3>

        <label>Название</label>
        <input
          className="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Описание</label>
        <textarea
          className="input-title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="modal-actions">
          <button
            className="modal-create-btn"
            onClick={handleSubmit}
          >
            Создать
          </button>
          <button
            className="modal-reset-btn"
            onClick={handleClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;

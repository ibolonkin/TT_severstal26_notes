import { useEffect, useState } from 'react';
import './NoteViewModal.css';
import { toast } from 'react-toastify';

const NoteViewModal = ({ note, isOpen, onClose, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note?.title || '');
  const [description, setDescription] = useState(note?.description || '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setIsEditing(false);
    }
  }, [note]);

  if (!isOpen || !note) return null;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const mmMonth = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${hh}:${mm} ${dd}.${mmMonth}.${yyyy}`;
  };

  const handleSave = () => {
    if (!title.trim()) {
      toast.error('Название заметки не может быть пустым');
      return;
    }
    onUpdate(note.id, {
      title: title.trim(),
      description,
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(note.title);
    setDescription(note.description);
    setIsEditing(false);
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal note-view-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="note-view-header">
          <span className="note-view-date">{formatDate(note.createdAt)}</span>

          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
            disabled={isEditing}
          >
            Изменить
          </button>
        </div>

        <div className="view-modal-title">
          <label>Название</label>

          <div className="title-field">
            {isEditing ? (
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="edit-input-title"
              />
            ) : (
              <h3 className="view-title-text">{note.title}</h3>
            )}
          </div>
        </div>

        <div className="view-modal-descr">
          <label>Описание</label>

          <div className="description-field">
            {isEditing ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="edit-textarea-description"
              />
            ) : (
              <p className="note-view-description">{note.description}</p>
            )}
          </div>
        </div>

        <div className="modal-view-actions">
          <button
            className="modal-create-btn"
            onClick={handleSave}
            disabled={!isEditing}
          >
            Сохранить
          </button>

          <button
            className="modal-reset-btn"
            onClick={isEditing ? handleCancel : onClose}
          >
            {isEditing ? 'Отмена' : 'Закрыть'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteViewModal;

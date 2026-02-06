import { useState } from 'react';
import './NoteCard.css';
import DeleteModal from '../DeleteModal/DeleteModal';
import { toast } from 'react-toastify';

const NoteCard = ({ note, onClick, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return '';
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const mmMonth = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${hh}:${mm} ${dd}.${mmMonth}.${yyyy}`;
  };

  const handleDelete = () => {
    onDelete(note.id);
    setShowDelete(false);
    toast.success('Заметка удалена!');
  };

  return (
    <>
      <div
        className="note-card"
        onClick={onClick}
      >
        <button
          className="note-delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowDelete(true);
          }}
        >
          🗑️
        </button>

        <h3 className="note-title">{note.title}</h3>
        <div className="note-card-date">{formatDate(note.createdAt)}</div>
      </div>

      {showDelete && (
        <DeleteModal
          onCancel={() => setShowDelete(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default NoteCard;

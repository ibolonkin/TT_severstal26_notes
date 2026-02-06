import './NoteViewModal.css';

const NoteViewModal = ({ note, isOpen, onClose }) => {
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal note-view-modal">
        <div className="note-view-date">{formatDate(note.createdAt)}</div>
        <div className="view-modal-title">
          <label>Название</label>
          <h3>{note.title}</h3>
        </div>
        <div className="view-modal-descr">
          <label className="view-title-descr">Описание</label>
          <p className="note-view-description">{note.description}</p>
        </div>
        <div className="modal-view-actions">
          <button
            className="modal-reset-btn"
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteViewModal;

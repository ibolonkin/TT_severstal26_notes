import './DeleteModal.css';

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="delete-modal-backdrop">
      <div className="delete-modal">
        <p>Вы действительно хотите удалить заметку?</p>
        <div className="delete-modal-buttons">
          <button
            className="btn-delete"
            onClick={onConfirm}
          >
            Удалить
          </button>
          <button
            className="btn-cancel"
            onClick={onCancel}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

import { useState } from 'react';
import './Home.css';
import NoteModal from '../../components/NoteModal/NoteModal';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createNote = (note) => {
    setNotes((prev) => [
      {
        id: crypto.randomUUID(),
        title: note.title,
        description: note.description,
        createdAt: Date.now(),
      },
      ...prev,
    ]);
  };

  return (
    <div className="home">
      <header className="home-header">
        <h2 className="home-title">Заметки: {notes.length}</h2>

        <button
          className="home-create-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Создать заметку
        </button>
      </header>

      {notes.length === 0 && <div className="home-empty">Заметок пока нет. Создайте первую заметку!</div>}

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          createNote(data);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Home;

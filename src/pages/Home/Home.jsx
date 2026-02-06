import { useEffect, useState } from 'react';
import './Home.css';
import NoteModal from '../../components/NoteModal/NoteModal';
import NoteCard from '../../components/NoteCard/NoteCard';
import NoteViewModal from '../../components/NoteViewModal/NoteViewModal';

const Home = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewNote, setViewNote] = useState(null);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const updateNote = (id, data) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...data } : n)));
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const createNote = (note) => {
    const newNote = {
      id: crypto.randomUUID(),
      title: note.title,
      description: note.description,
      createdAt: Date.now(),
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
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

      <div className="home-grid">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onClick={() => setViewNote(note)}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          createNote(data);
          setIsModalOpen(false);
        }}
      />

      <NoteViewModal
        note={viewNote}
        isOpen={!!viewNote}
        onClose={() => setViewNote(null)}
      />
    </div>
  );
};

export default Home;

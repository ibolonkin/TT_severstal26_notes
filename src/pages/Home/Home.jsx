import './Home.css'

const Home = () => {
  const notesCount = 0;
  return (
    <div className="home">
      <header className="home-header">
        <h2 className="home-title">Заметки: {notesCount}</h2>

        <button className="home-create-btn">Создать заметку</button>
      </header>

      <div className="home-empty">Заметок пока нет. Создайте первую заметку!</div>

      <div className="home-grid">{/* добавить карточки */}</div>
    </div>
  );
};

export default Home;

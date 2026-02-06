import styles from'./NoteCard.css'

const NoteCard = () => {
    return (
        <div className='note-card'>
            <div className='note-card-header'>
                <h3 className='note-card-title'>
                    Название заметки
                </h3>

                <button className='note-card-del'>x</button>
            </div>

            <div className='note-card-date'>
                dd.mm.yy HH:MM
            </div>
        </div>
    );
}
 
export default NoteCard;
import React, {useState} from 'react';

function EditNote({ currentNote, onEdit, closeModal }) {
    const { _id, title: currentTitle, body: currentBody } = currentNote;
    
    
 const [title ,setTitle] = useState(currentTitle);
    const [desc ,setDesc] = useState(currentBody);

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }
    const changeDescHandler = event => {
        const value = event.target.value;
        setDesc(value);
    }
    const editNote = () => {
        const note = {
            title: title,
            body: desc,
            _id: _id
        }
        onEdit(note);
    }
    return (
        <div className="note">
                <label>Tytuł:</label>
                <input type="text" value={title} onChange={changeTitleHandler} />
                <br />
                <label>Opis:</label>
                <input type="text" value={desc} onChange={changeDescHandler} />
                <br />
            <button onClick={() => editNote()}>Zapisz Notatkę</button>
            <button onClick={closeModal}>Anuluj</button>
            </div>
    );
}

export default EditNote;
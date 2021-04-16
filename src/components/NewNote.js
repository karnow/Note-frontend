import React from "react";

function NewNote(props) {
    
    return (
        <div className="note">
            <label>Tytuł:</label>
            <input type="text" />
             <br/>
            <label>Opis:</label>
            <input type="text" />
             <br/>
            <button>Dodaj Notatkę</button>
        </div>
    );
}

export default NewNote;
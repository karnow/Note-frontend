import React, { useState } from "react";

function Note({id, title, body, onDelete, onEdit }) {
    
    const [showDesc, setShowDesc] = useState(false);

    function toggleDesc() {
    setShowDesc(!showDesc)
    }
    
    return (
        <div className="note">
                    <p onClick={toggleDesc}>{title}</p>
                    {showDesc ? (<div className="description">{body}</div>): (null)}
                    <button onClick={onEdit}> edytuj</button>
                    <button className="delete" onClick={onDelete}>usuń</button>
        </div>
    )
}

export default Note;
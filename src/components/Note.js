import React from "react";

function Note({title,body}) {
// const {title , body} = props
    return (
        <div className="note">
                    <p>{title}</p>
                    <div className="description">{body}</div>
                    <button>edytuj</button>
                    <button className="delete">usuń</button>
        </div>
    )
}

export default Note;
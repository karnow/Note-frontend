import React from "react";

class Notes extends React.Component {

    
    render() {
        const { children } = this.props;
        return (
            <>
                <h1>notes</h1>
                {children}
                <h1>Opis</h1>
            </>
        );
    }
}

export default Notes;
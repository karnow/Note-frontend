import React from "react";

class Notes extends React.Component {


    render() {
        const { children } = this.props;
        return (
            <div>
                <p>My notes:</p>

                <div className="note">
                    <p>Wykąpać psa</p>
                    <div className="description">
                        pamietaj aby wykąpać psa specjalnym szamponem
                    </div>
                    <button>edytuj</button>
                    <button className="delete">usuń</button>
                </div>

                <div className="note">
                    <p>Zrobić zakupy</p>
                    <div className="description">
                        kupić mleko, masło ,likier
                    </div>
                    <button>edytuj</button>
                    <button className="delete">usuń</button>
                </div>

            </div>

                
                
           
        );
    }
}

export default Notes;
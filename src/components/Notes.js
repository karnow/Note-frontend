import React from "react";
import Note from './Note';
class Notes extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.notes = [
    //         {
    //             id: '123',
    //             title: 'Wykąpać psa',
    //             body: 'pamietaj aby wykąpać psa specjalnym szamponem'
    //         },
    //         {
    //             id: '456',
    //             title: 'Zrobić zakupy',
    //             body: 'kupić mleko, masło likier'
    //         },
    //         {
    //             id: '788',
    //             title: 'Posprzątać mieszkanie',
    //             body: 'zetrzeć kurze, umyć podłodę'
    //         }
    //     ]
    // }
    state = {
        notes: [
            {
                id: '123',
                title: 'Wykąpać psa',
                body: 'pamietaj aby wykąpać psa specjalnym szamponem'
            },
            {
                id: '456',
                title: 'Zrobić zakupy',
                body: 'kupić mleko, masło likier'
            },
            {
                id: '788',
                title: 'Posprzątać mieszkanie',
                body: 'zetrzeć kurze, umyć podłodę'
            }
        ]
    }
    
    render() {
        
        
        return (
            <div>
                <p>My notes:</p>
                {this.state.notes.map((note) => <Note key={note.id} title={note.title} body={note.body} />)
                }
                     
            </div>

                
                
           
        );
    }
}

export default Notes;
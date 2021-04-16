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
    componentDidMount() {
    //     this.deleteNote('123');
     }
    deleteNote(id) {
        console.log(id)
        const notes = this.state.notes;
        const newNotes = notes.filter(note => note.id !== id);
        this.setState({
            notes: newNotes
        });
    }
    
    render() {
        
        console.log("stan:", this.state.notes);
        
        return (
            <div>
                <p>My notes:</p>
                {this.state.notes.map((note) => <Note key={note.id} title={note.title} body={note.body} onDelete={()=>this.deleteNote(note.id)}/>)
                }
                     
            </div>

                
                
           
        );
    }
}

export default Notes;
import React from "react";
import Note from './Note';
import NewNote from './NewNote';
import Modal from 'react-modal';
import EditNote from "./EditNote";
class Notes extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.notes = [
    //         {
    //             id: '123',
    //             title: 'Wykąpać psa',
    //             body: 'pamietaj aby wykąpać psa specjalnym szamponem'
    //         },
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
        ],
        showEditModal: false,
        editNote: {}

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

    addNote(note) {
        console.log('notetka',note);
        const notes = this.state.notes;
        notes.push(note);
        console.log(notes)
        this.setState({
            notes: notes
        });
        
    }
    editNote(note) {
        const notes = this.state.notes;
        const index = notes.findIndex(ele => ele.id === note.id);
        if (index >= 0) {
            notes[index] = note;
            this.setState({
            notes: notes
        });
    }
    this.toggleModal();
    }
    editNoteHandler(note) {
        this.toggleModal();
        this.setState({ editNote: note });
        

    }
    toggleModal() {
        this.setState({ showEditModal: !this.state.showEditModal });
    }

        
    render() {
        
        console.log("stan:", this.state.notes);
        console.log("stan editNote:", this.state.editNote);
        
        return (
            <div>
                <p>My notes:</p>
                <NewNote onAdd={(note) => this.addNote(note)} />
                <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatkę">
                    <EditNote
                        currentNote={this.state.editNote}
                        onEdit={(note) => this.editNote(note)}
                        closeModal={() => this.toggleModal()}
                    />
                </Modal>
                {this.state.notes.map((note) => <Note key={note.id} title={note.title} body={note.body} onEdit={()=>this.editNoteHandler(note)} onDelete={()=>this.deleteNote(note.id)}/>)
                }
                     
            </div>

                
                
           
        );
    }
}

export default Notes;
import React from "react";
import Note from './Note';
import NewNote from './NewNote';
import Modal from 'react-modal';
import EditNote from "./EditNote";
import AxiosApiNote from '../api/axiosApi';
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
        notes: [],
        showEditModal: false,
        editNote: {},
        error:null

    }
    componentDidMount() {

        AxiosApiNote.getAllNotes()
            .then(
                (notes) => { console.log(notes); this.setState({ notes: notes }) })
        
            .catch(
                (error) => { Promise.reject(this.setState({ error })); console.log(error) })
     
    
    }
    //old Api
    // async fetchNotes() {
    //     const allNotes = await axios.get('http://localhost:3001/api/notes',)
    //     console.log(allNotes);
    //     const notes = allNotes.data;
    //     this.setState({ notes:notes})
    // }

    // async deleteNote(id) {
    //     console.log(id);
    //     const res = await axios.delete('http://localhost:3001/api/notes/' + id);
    //     console.log(res.status);
    //     if (res.status === 204) {
    //        fetchNotes();
    //     }
    //     // const newNotes = notes.filter(note => note._id !== id);
    //     // this.setState({
    //     //     notes: newNotes
    //     // });
    // }

    deleteNote(id) {
        AxiosApiNote.deleteNote(id)
            .then((result) => {
                console.log(result);
                const notes = this.state.notes;
                const newNotes = notes.filter(note => note._id !== id);
                this.setState({
                    notes: newNotes
                });
            }).catch((e) => console.log('Błąd :', e));
    }


    addNote(note) {
        AxiosApiNote.addNote(note)
            .then((result) => {
                const notes = this.state.notes;
                notes.push(result);
                this.setState({
                notes: notes
                });
            }).catch((e) => console.log('Błąd :', e));
    }

    editNote(note) {
        AxiosApiNote.editNote(note)
            .then((result) => {
                const notes = this.state.notes;
                const index = notes.findIndex(ele => ele._id === note._id);
                if (index >= 0) {
                    notes[index] = result;
                    this.setState({
                        notes: notes
                    });
                }
            }).catch((e) => console.log('Błąd :', e));
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
                {this.state.notes.map((note) => <Note key={note._id} title={note.title} body={note.body} onEdit={()=>this.editNoteHandler(note)} onDelete={()=>this.deleteNote(note._id)}/>)
                }
                     
            </div>

                
                
           
        );
    }
}

export default Notes;
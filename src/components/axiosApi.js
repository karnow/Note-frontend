import axios from 'axios';

const AxiosApiNote = {

    getAllNotes: async function () {
        const respons = await axios.get('http://localhost:3001/api/notes',)
        console.log(respons);
        const result = respons.data;
        return result
    },

    deleteNote: async function (id) {
        const respons = await axios.delete('http://localhost:3001/api/notes/' + id);
        return respons
    },

    addNote: async function (note) {
        console.log('notatka: ', note);
        const respons = await axios.post('http://localhost:3001/api/notes', note);
        return respons.data;
    },

    editNote: async function (note) {
        
        const respons = await axios.put('http://localhost:3001/api/notes/' + note._id, note);
        return respons.data;
       
    }
}

export default AxiosApiNote;
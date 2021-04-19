import axios from './instance';

const AxiosApiNote = {

    getAllNotes: async function () {
        const respons = await axios.get('/notes',)
        console.log(respons);
        const result = respons.data;
        return result
    },

    deleteNote: async function (id) {
        const respons = await axios.delete('/notes/' + id);
        return respons
    },

    addNote: async function (note) {
        console.log('notatka: ', note);
        const respons = await axios.post('/notes', note);
        return respons.data;
    },

    editNote: async function (note) {
        
        const respons = await axios.put('/notes/' + note._id, note);
        return respons.data;
       
    }
}

export default AxiosApiNote;
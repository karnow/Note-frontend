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
        
            const res = await axios.post('/notes', note);
            return res.data;
        
    },

    editNote: async function (note) {
       
            const respons = await axios.put('/notes/' + note._id, note);
            console.log(respons)
            return respons.data;
        
       
    }
}

export default AxiosApiNote;
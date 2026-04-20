import api from './api.js'

export const getQuestions = async () => {
    try{
        const res = await api.get('/api/questions/')
        return res.data
    }catch(e){
        console.log('Error: ', e)
    }
}
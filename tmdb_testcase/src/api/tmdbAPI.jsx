import axios from "axios"

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: "application/json"
    },
    params: {
        api_key: 'ba3188370c2e146b3b534ab2a38339e9'
    }
}) 

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://simcc.uesc.br/v3/api/swagger'
})

export default api
import api from './services/api'

export const fetchUsers = async () => {
    try {
       const response = await api.get('/users')
       return response
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserById = async(login) => {
    try {
        const response = await api.get(`/users/${login}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


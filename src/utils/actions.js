import api from '../services/api'

export const fetchUsers = async () => {
    try {
       const response = await api.get('/users')
       return response
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataByKey = async (login, iskey) => {
    let url = `/users/${login}`
    if (iskey === undefined) {
        url = `/users/${login}`
    }else {
        url = `/users/${login}/${iskey}`
    }
    try {
        const response = await api.get(url)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchOtherUser = async (login) => {
    try {
        const response = await api.get(`/users/${login}`)
        return response
    } catch (error) {
        console.log(error)
    }
}


// export const fetchUserDataByLogin = async (login, key) => {
//     try {
//         const response = await api.get(`/users/${login}/${key}`)
//         return response
//     } catch (error) {
//         console.log(error)
//     }
// }
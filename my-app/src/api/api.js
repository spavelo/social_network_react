import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "acbe659e-ab74-4691-a62b-b02b57afb23e"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(userId) {
        return instance.post(`/follow/${userId}`, {})
    },
    deleteFollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }
}

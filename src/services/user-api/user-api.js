import axiosClient from '../axiosClient'
import USER_API from './api-url'

const userAPI = {
    register(data) {
        return axiosClient({
            url: USER_API.USER_REGISTER_URL,
            method: 'post',
            data: data,
        })
    },
    login(data) {
        return axiosClient({
            url: USER_API.USER_LOGIN_URL,
            method: 'post',
            data: data,
        })
    },
    logout() {
        return axiosClient({
            method: 'post',
            url: USER_API.USER_LOGOUT,
        })
    },
    getUserInfo() {
        return axiosClient({
            url: USER_API.USER_PROFILE,
            body: {
                filter: {
                    id: 1,
                },
                sort: {
                    createdAt: 1,
                },
                paging: {
                    start: 0,
                    limit: 30,
                },
            },
        })
    },
}

export default userAPI

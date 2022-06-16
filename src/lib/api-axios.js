import axios from 'axios'
import { userActions } from 'store/userSlice/userSlice'
import store from 'store/index'

// const baseURL = 'http://localhost:3001'
const baseURL = 'https://shopeebe.herokuapp.com'

// handle response and request here
axios.interceptors.response.use(
    (response) => {
        console.log('response in axios interceptors')
        return response
    },
    (error) => {
        console.log(error)
        if (error.response.status === 401) {
            console.log('fail 401 loging out...')

            store.dispatch(userActions.logout())
            localStorage.removeItem('token')
        }
        throw new Error(error.response.data.message)
    }
)

axios.interceptors.request.use(
    (request) => {
        console.log('request in axios interceptors')
        return request
    },
    (error) => {
        // const controller = new AbortController()
        // controller.abort()
        return error
    }
)

const userAPI = {
    register(data) {
        return axios({
            url: `/users/register`,
            method: 'post',
            baseURL: baseURL,
            data: data,
        })
    },
    login(data) {
        return axios({
            url: `/users/login`,
            method: 'post',
            baseURL: baseURL,
            data: data,
        })
    },
    logout(token) {
        return axios({
            method: 'post',
            url: '/users/logout',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            baseURL,
        })
    },
    getUserInfo(token) {
        return axios({
            url: '/users/profile',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            baseURL,
        })
    },
}

const uiAPI = {
    getCategories() {
        return axios({
            url: '/categories/list-category',
            baseURL,
            method: 'POST',
            body: JSON.stringify({
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
            }),
        })
    },
}

export { userAPI, uiAPI }

import axiosClient from '../axiosClient'
import CATE_API from './api-url'

const categoryApi = {
    getCategories() {
        return axiosClient({
            url: CATE_API.GET_LIST,
            method: 'POST',
            body: JSON.stringify({
                filter: {
                    name: '',
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

export default categoryApi

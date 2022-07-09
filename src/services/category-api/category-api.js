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
    getProdOfCate(slug, params) {
        const url = CATE_API.GET_PROD_OF_CATE.replace(':slug', slug)
        return axiosClient.get(url, { params: params })
    },
}

export default categoryApi

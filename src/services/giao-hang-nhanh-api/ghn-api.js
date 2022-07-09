import axiosClient from 'services/axiosClient'
import GHN_API from './api-url'

const productAPI = {
    createProduct(newProduct) {
        const url = GHN_API.CREATE_PRODUCT
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        }
        return axiosClient.post(url, newProduct, config)
    },
    getProduct(id) {
        const url = GHN_API.GET_PRODUCT.replace(':id', id)
        return axiosClient.get(url)
    },
    updateProduct(id, newData) {
        const url = GHN_API.UPDATE_PRODUCT.replace(':id', id)
        return axiosClient.post(url, newData)
    },
    deleteProduct(id) {
        const url = GHN_API.DELETE_PRODUCT.replace(':id', id)
        return axiosClient.delete(url)
    },
    getListProd(params) {
        const url = GHN_API.GET_LIST
        return axiosClient.get(url, { params: params })
    },
}

export default productAPI

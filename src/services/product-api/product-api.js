import axiosClient from 'services/axiosClient'
import PRODUCT_API from './api-url'

const productAPI = {
    createProduct(newProduct) {
        const url = PRODUCT_API.CREATE_PRODUCT
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        }
        return axiosClient.post(url, newProduct, config)
    },
}

export default productAPI

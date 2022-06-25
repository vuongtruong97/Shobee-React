import React, { useState, useEffect } from 'react'
import styles from './ManageProducts.module.scss'

import SearchProduct from '../components/SearchProduct/SearchProduct'
import ProductsTable from '../components/ProductsTable/ProductsTable'
import shopAPI from 'services/shop-api/shop-api'

function ManageProducts() {
    const [shopProducts, setShopProducts] = useState([])

    const getListProd = async () => {
        const res = await shopAPI.getMyShopProduct()
        setShopProducts(res.data.data)
    }

    useEffect(() => {
        getListProd()
    }, [])
    const handleRefreshPage = () => {
        getListProd()
        console.log('refresh')
    }
    return (
        <div className={styles.products_pages}>
            <SearchProduct onCreate={handleRefreshPage} />
            <ProductsTable products={shopProducts} />
        </div>
    )
}

export default ManageProducts

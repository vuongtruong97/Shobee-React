import React from 'react'

import styles from './ListProducts.module.scss'

import ProductItem from './ProductItem'
import SortBar from './SortBar'

function ListProducts() {
    return (
        <div className={styles.ListProducts}>
            <SortBar />
            <div className='row'>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default ListProducts

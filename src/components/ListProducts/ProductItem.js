import React from 'react'
import styles from './ProductItem.module.scss'

function ProductItem() {
    return (
        <div className='col col-6 sm-4 md-4 lg-3 xl-2'>
            <div className={styles.productItem}>Product</div>
        </div>
    )
}

export default ProductItem

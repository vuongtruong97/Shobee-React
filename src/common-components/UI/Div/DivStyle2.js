import React from 'react'
import styles from './DivStyle2.module.scss'

function DivStyle2({ children, ...props }) {
    return (
        <div {...props} className={styles.style2}>
            {children}
        </div>
    )
}

export default DivStyle2

import React from 'react'
import styles from './DivStyle1.module.scss'

function DivStyle1({ children, ...props }) {
    return (
        <div {...props} className={styles.style1}>
            {children}
        </div>
    )
}

export default DivStyle1

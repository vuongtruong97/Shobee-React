import React from 'react'
import styles from './Checkbox.module.scss'

function Checkbox({ ...props }) {
    const id = Math.random()
    return (
        <div className={styles.checkbox}>
            <input id={id} type='checkbox' />
            <label htmlFor={id}></label>
        </div>
    )
}

export default Checkbox

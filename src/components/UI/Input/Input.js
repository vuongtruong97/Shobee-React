import React, { forwardRef } from 'react'

// useImperativeHandle collab with forwardRef

import styles from './Input.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Input({ label, id, ...props }, ref) {
    // console.log(register, required)
    return (
        <div className={cx('input')}>
            <label htmlFor={id}>{label}</label>
            <div className={cx('input-wrap')}>
                <input ref={ref} id={id} {...props} />
            </div>
        </div>
    )
}

export default forwardRef(Input)

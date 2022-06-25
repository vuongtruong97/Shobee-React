import React, { forwardRef } from 'react'

// useImperativeHandle collab with forwardRef

import styles from './Input.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Input({ label, id, error, ...props }, ref) {
    // console.log(register, required)
    return (
        <div className={cx('input')}>
            <label htmlFor={id}>{label}</label>
            <div className={cx('input-wrap', { error: error })}>
                <input ref={ref} id={id} {...props} />
            </div>
            {error && <span className={cx('error_message')}>{error}</span>}
        </div>
    )
}

export default forwardRef(Input)

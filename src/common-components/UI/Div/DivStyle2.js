<<<<<<< HEAD
import React from 'react'
import styles from './DivStyle2.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function DivStyle2({ children, hover, ...props }) {
    return (
        <div {...props} className={cx('style2', { hover })}>
            {children}
        </div>
    )
}

export default DivStyle2
=======
import React from 'react'
import styles from './DivStyle2.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function DivStyle2({ children, hover, ...props }) {
    return (
        <div {...props} className={cx('style2', { hover })}>
            {children}
        </div>
    )
}

export default DivStyle2
>>>>>>> 08311cd13073a4a2c5c27195e5a1a692c8df7a62

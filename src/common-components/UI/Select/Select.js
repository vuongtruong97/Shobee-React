import React from 'react'
import styles from './Select.module.scss'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Select(
    { label, listOption = [], listName, error, valueField, valueName, ...props },
    ref
) {
    return (
        <div className={styles.wrap}>
            <label>{label}</label>
            <select className={cx('select', { error: error })} ref={ref} {...props}>
                <option disabled defaultValue hidden>
                    {listName}
                </option>
                {listOption.map((item, i) => (
                    <option key={i} value={item[valueField]}>
                        {item[valueName]}
                    </option>
                ))}
            </select>
            {error && <span className={cx('error_message')}>{error}</span>}
        </div>
    )
}

export default React.forwardRef(Select)

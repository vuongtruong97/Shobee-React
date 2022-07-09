import React from 'react'
import styles from './Select.module.scss'
import { IoMdArrowDropdown } from 'react-icons/io'

function Select({ label, listOption = [], listName, ...props }, ref) {
    return (
        <div className={styles.wrap}>
            <label>{label}</label>
            <select className={styles.select} ref={ref} {...props}>
                <option disabled defaultValue hidden>
                    {listName}
                </option>
                {listOption.map((item) => (
                    <option key={item._id} value={item._id}>
                        {item.display_name}
                    </option>
                ))}
            </select>
            <div className={styles.arrow}>
                <IoMdArrowDropdown />
            </div>
        </div>
    )
}

export default React.forwardRef(Select)

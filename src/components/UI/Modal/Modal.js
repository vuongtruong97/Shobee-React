import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.scss'

const BackDrop = () => {
    return <div className={styles.backdrop}></div>
}
const OverLay = ({ children, ...props }) => {
    return <div {...props} className={styles.modal}>{children}</div>
}

const rootModal = document.getElementById('root-modal')

function Modal({ children, ...props }) {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop />, rootModal)}
            {ReactDOM.createPortal(<OverLay {...props}>{children}</OverLay>, rootModal)}
        </>
    )
}

export default Modal

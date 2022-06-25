import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Footer from '../Footer/Footer'

import styles from './MainLayout.module.scss'

function MainLayout() {
    return (
        <>
            <Header />
            <main className={styles.wrap}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout

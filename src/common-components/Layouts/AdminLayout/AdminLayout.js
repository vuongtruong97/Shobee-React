import React from 'react'
import styles from './AdminLayout.module.scss'
import { Outlet } from 'react-router-dom'

import AdminHeader from './AdminHeader'
import AdminSideBar from './AdminSideBar'

function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <div className={styles.wrap}>
                <AdminSideBar />
                <div style={{ marginLeft: '22rem' }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout

<<<<<<< HEAD
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
                <div className='row'>
                    <div className='col col-2 lg-1'>
                        <AdminSideBar />
                    </div>
                    <div className='col col-10 lg-11' style={{ padding: '0 3rem' }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
=======
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
                <div className='row'>
                    <div className='col col-2 lg-1'>
                        <AdminSideBar />
                    </div>
                    <div className='col col-10 lg-11' style={{ padding: '0 3rem' }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
>>>>>>> 08311cd13073a4a2c5c27195e5a1a692c8df7a62

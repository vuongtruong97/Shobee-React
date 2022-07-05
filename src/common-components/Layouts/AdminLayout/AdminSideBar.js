import React from 'react'
import styles from './AdminSideBar.module.scss'
import { Link } from 'react-router-dom'

import { TbTruckDelivery, TbFileInvoice, TbChartLine, TbMessage2 } from 'react-icons/tb'
import { RiProductHuntLine, RiShoppingBag3Fill } from 'react-icons/ri'

import NeuButton from 'common-components/UI/Button/NeuButton'

function AdminSideBar() {
    const buttonStyle = {
        color: 'var(--text-primary-o)',
        justifyContent: 'start',
    }
    return (
        <div className={styles.sideBar}>
            <Link to='' className={styles.sideOption}>
                <NeuButton style={buttonStyle} rounded fullwidth>
                    <TbChartLine />
                    &nbsp;&nbsp;Số liệu
                </NeuButton>
            </Link>
            <Link to='delivery' className={styles.sideOption}>
                <NeuButton style={buttonStyle} rounded fullwidth>
                    <TbTruckDelivery />
                    &nbsp;&nbsp;Vận chuyển
                </NeuButton>
            </Link>
            <Link to='order' className={styles.sideOption}>
                <NeuButton style={buttonStyle} rounded fullwidth>
                    <TbFileInvoice />
                    &nbsp;&nbsp;Đơn hàng
                </NeuButton>
            </Link>
            <Link to='products' className={styles.sideOption}>
                <NeuButton style={buttonStyle} rounded fullwidth>
                    <RiProductHuntLine />
                    &nbsp;&nbsp;Sản phẩm
                </NeuButton>
            </Link>

            <Link to='chat' className={styles.sideOption}>
                <NeuButton style={buttonStyle} rounded fullwidth>
                    <TbMessage2 />
                    &nbsp;&nbsp;Khách hàng
                </NeuButton>
            </Link>
            <Link to='setting' className={styles.sideOption}>
                <NeuButton style={buttonStyle} rounded fullwidth>
                    <RiShoppingBag3Fill />
                    &nbsp;&nbsp;Cài đặt shop
                </NeuButton>
            </Link>
        </div>
    )
}

export default AdminSideBar

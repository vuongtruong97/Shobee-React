import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { IoNotificationsSharp } from 'react-icons/io5'
import { MdSupportAgent } from 'react-icons/md'

import PopOver from 'components/UI/PopOver/PopOver'

import styles from './NavBar.module.scss'
import classNames from 'classnames/bind'
import { userLogout } from 'store/userSlice/userActions'

const cx = classNames.bind(styles)

function NavBar() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const token = useSelector((state) => state.user.token)

    const [isShowUserActions, setIsShowUserActions] = useState(false)
    const dispatch = useDispatch()

    const handleShowUserActions = () => {
        setIsShowUserActions(!isShowUserActions)
    }
    const handleLogoutUser = () => {
        console.log('dispatch logout action')
        dispatch(userLogout(token))
    }

    return (
        <nav className={cx('header-nav')}>
            <ul className={cx('nav-bar')}>
                <li>
                    <Link to='/merchart'>Kênh người bán</Link>
                </li>
                <li>
                    <Link to='/shop'>Trở thành người bán Shoppe</Link>
                </li>
                <li>Tải ứng dụng</li>
                <li>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        Kết nối
                        <FaFacebookSquare />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <ul className={cx('nav-bar', 'actions')}>
                <li>
                    <Link to='/notification'>
                        <IoNotificationsSharp /> Thông báo
                    </Link>
                </li>
                <li>
                    <Link to='/support'>
                        <MdSupportAgent /> Hỗ trợ
                    </Link>
                </li>
                {!isLoggedIn && (
                    <li>
                        <Link to='auth/register'>Đăng ký</Link>
                    </li>
                )}
                {!isLoggedIn && (
                    <li>
                        <Link to='auth/login'>Đăng nhập</Link>
                    </li>
                )}
                {isLoggedIn && (
                    <li
                        onMouseEnter={handleShowUserActions}
                        onMouseLeave={handleShowUserActions}
                    >
                        <div className={styles['user-avatar']}>
                            <img
                                alt='avatar'
                                src='https://cf.shopee.vn/file/2fd135297d1faa65259b360d23f680aa_tn'
                            />
                        </div>
                        <Link to='user/profile'>Vuong Truong</Link>
                        {
                            <PopOver show={isShowUserActions}>
                                <Link
                                    className={styles['popover-item']}
                                    to='user/profile'
                                >
                                    Tài Khoản Của Tôi
                                </Link>
                                <Link
                                    className={styles['popover-item']}
                                    to='user/profile'
                                >
                                    Đơn Mua
                                </Link>
                                <div
                                    onClick={handleLogoutUser}
                                    className={styles['popover-item']}
                                >
                                    Đăng Xuất
                                </div>
                            </PopOver>
                        }
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar

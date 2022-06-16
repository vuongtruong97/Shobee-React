import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { IoNotificationsSharp } from 'react-icons/io5'
import { MdSupportAgent } from 'react-icons/md'

import PopOver from 'components/UI/PopOver/PopOver'
import fallBackAvatar from 'assets/images/fallback_ava.jpg'

import styles from './NavBar.module.scss'
import classNames from 'classnames/bind'
import { userLogout } from 'store/userSlice/userActions'
import { userActions } from 'store/userSlice/userSlice'

import { userAPI } from 'lib/api-axios'

const cx = classNames.bind(styles)

function NavBar() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const userInfor = useSelector((state) => state.user.info)
    const token = useSelector((state) => state.user.token)

    // const [userInfo, setUserInfo] = useState({})

    const [isShowUserActions, setIsShowUserActions] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoggedIn) {
            userAPI
                .getUserInfo(token)
                .then((res) => dispatch(userActions.setUserInfo(res.data.data)))
        }
    }, [isLoggedIn, token, dispatch])

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
                    <Link to='/shop'>Kênh người bán</Link>
                </li>
                <li>
                    <Link to='/shop/register'>Trở thành người bán Shoppe</Link>
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
                                alt='user_avatar'
                                src={userInfor.avatar || fallBackAvatar}
                                onError={(e) => {
                                    e.currentTarget.onerror = null
                                    // e.currentTarget.src = { fallBackAvatar }
                                }}
                            />
                        </div>
                        <Link to='user/profile'>{userInfor.email}</Link>
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

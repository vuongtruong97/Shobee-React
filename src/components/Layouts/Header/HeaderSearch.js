import React from 'react'
import styles from './HeaderSearch.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import { FaShopify, FaSearch, FaShoppingCart } from 'react-icons/fa'
import MobileNav from './MobileNav'

const cx = classNames.bind(styles)

function HeaderSearch() {
    return (
        <div className={cx('search')}>
            <MobileNav />
            <Link to='/home' className={cx('logo')}>
                <FaShopify />
                <span>Shobee</span>
            </Link>
            <div className={cx('control')}>
                <div className={cx('form-search')}>
                    <form>
                        <input placeholder='Săn sale công nghệ ...'></input>
                        <button>
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className={cx('suggest')}>
                    <ul>
                        <li>Váy</li>
                        <li>Dép</li>
                        <li>Áo phông</li>
                        <li>Túi sách nữ</li>
                        <li>Áo thun</li>
                    </ul>
                </div>
            </div>
            <div className={cx('cart', 'nav-button')}>
                <FaShoppingCart />
                <div className={cx('cart-amount')}>99+</div>
            </div>
        </div>
    )
}

export default HeaderSearch

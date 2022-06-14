import React, { useCallback, useEffect } from 'react'
import classes from './Header.module.scss'
import classNames from 'classnames/bind'

import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from 'store/uiSlice/uiSlice'

import NavBar from './NavBar'
import HeaderSearch from './HeaderSearch'
import SwitchButton from 'components/UI/SwitchButton/SwitchButton'

const cx = classNames.bind(classes)

function Header() {
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state) => state.ui.isDarkMode)

    const changeThemeHandler = () => {
        localStorage.setItem('isDarkMode', !isDarkMode)
        dispatch(uiActions.setIsDarkMode(!isDarkMode))
    }

    useEffect(() => {
        if (isDarkMode === true) {
            document.body.classList.add('dark')
        }
        if (isDarkMode === false) {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <header className={cx('header')}>
            <div className='container'>
                <NavBar />
                <HeaderSearch />
            </div>
            <SwitchButton checked={isDarkMode} onChange={changeThemeHandler} />
        </header>
    )
}

export default Header

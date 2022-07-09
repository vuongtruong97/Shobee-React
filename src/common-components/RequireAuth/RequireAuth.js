import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function RequireAuth() {
    const location = useLocation()
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate state={{ from: location }} replace to='/auth/login' />
    )
}

export default RequireAuth

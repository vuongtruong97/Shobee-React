import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ToastContainer from 'components/UI/Toast/Toast'
import Loading from './pages/Loading/Loading'
import MainLayout from 'components/Layouts/MainLayout/MainLayout'

const AuthLayout = React.lazy(() => import('components/Layouts/AuthLayout/AuthLayout'))
const AdminLayout = React.lazy(() => import('components/Layouts/AdminLayout/AdminLayout'))

const Products = React.lazy(() => import('./pages/Products/Products'))
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const User = React.lazy(() => import('./pages/User/User'))

const AuthPage = React.lazy(() => import('./pages/Auth/AuthPage'))

const Welcome = React.lazy(() => import('./pages/Welcome/Welcome'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))

function App() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/welcome' element={<Welcome />}>
                        <Route index path='new-user' element={<h2>Hello New User</h2>} />
                    </Route>

                    <Route path='/' element={<MainLayout />}>
                        <Route index path='/' element={<Navigate replace to='/home' />} />
                        <Route path='home' element={<Home />} />
                        <Route path='products' element={<Products />} />
                        <Route path='blog' element={<Blog />} />
                        <Route
                            path='user'
                            element={
                                isLoggedIn ? <User /> : <Navigate to='/auth/login' />
                            }
                        >
                            <Route path='profile' element={<h1>Profile</h1>} />
                        </Route>
                    </Route>

                    <Route path='/auth' element={<AuthLayout />}>
                        <Route path='register' element={<AuthPage />} />
                        <Route path='login' element={<AuthPage />} />
                    </Route>

                    <Route
                        path='/admin'
                        element={
                            isLoggedIn ? <AdminLayout /> : <Navigate to='/auth/login' />
                        }
                    >
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
            <ToastContainer />
        </>
    )
}

export default App

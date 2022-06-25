import React, { Suspense, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import userAPI from 'services/user-api/user-api'
import { userActions } from 'store/userSlice/userSlice'
import RequireAuth from 'common-components/RequireAuth/RequireAuth'

import ToastContainer from 'common-components/UI/Toast/Toast'
import Loading from './pages/Loading/Loading'
import MainLayout from 'common-components/Layouts/MainLayout/MainLayout'

const AuthLayout = React.lazy(() =>
    import('common-components/Layouts/AuthLayout/AuthLayout')
)
const AdminLayout = React.lazy(() =>
    import('common-components/Layouts/AdminLayout/AdminLayout')
)

const Products = React.lazy(() => import('./pages/Products/Products'))
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))
const Blog = React.lazy(() => import('./pages/Blog/Blog'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const User = React.lazy(() => import('./pages/User/User'))
const Category = React.lazy(() => import('./pages/Category/Category'))

const RegisterShop = React.lazy(() => import('./pages/Shop/RegisterShop'))
const ShopAnalystics = React.lazy(() =>
    import('./pages/Shop/ShopAnalystics/ShopAnalytics')
)
const ManageProducts = React.lazy(() =>
    import('./pages/Shop/ManageProducts/ManageProducts')
)

const AuthPage = React.lazy(() => import('./pages/Auth/AuthPage'))

const Welcome = React.lazy(() => import('./pages/Welcome/Welcome'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))

function App() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    const dispatch = useDispatch()
    //check user login and set user infor to redux
    useEffect(() => {
        if (isLoggedIn) {
            userAPI
                .getUserInfo()
                .then((res) => dispatch(userActions.setUserInfo(res.data.data)))
        }
    }, [isLoggedIn, dispatch])

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/welcome' element={<Welcome />}>
                        <Route index path='new-user' element={<h2>Hello New User</h2>} />
                    </Route>

                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<Navigate replace to='/home' />} />
                        <Route path='/category/:category' element={<Category />} />
                        <Route path='home' element={<Home />} />
                        <Route path='products' element={<Products />} />
                        <Route path='blog' element={<Blog />} />
                        <Route path='shop/register' element={<RegisterShop />} />

                        <Route element={<RequireAuth />}>
                            <Route path='user' element={<User />}>
                                <Route path='profile' element={<h1>Profile</h1>} />
                            </Route>
                        </Route>
                    </Route>

                    <Route path='/auth' element={<AuthLayout />}>
                        <Route path='register' element={<AuthPage />} />
                        <Route path='login' element={<AuthPage />} />
                    </Route>

                    {/* Admin Manage */}
                    <Route element={<RequireAuth />}>
                        <Route path='/admin' element={<AdminLayout />}>
                            <Route path='dashboard' element={<Dashboard />} />
                        </Route>
                    </Route>

                    {/* Shop Manage */}
                    <Route element={<RequireAuth />}>
                        <Route path='shop-manage/*' element={<AdminLayout />}>
                            <Route index element={<ShopAnalystics />} />
                            <Route path='products' element={<ManageProducts />} />
                        </Route>
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
            <ToastContainer />
        </>
    )
}

export default App

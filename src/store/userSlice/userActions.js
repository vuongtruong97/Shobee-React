import { userActions } from './userSlice'
import { toast } from 'react-toastify'

const url = 'https://shopeebe.herokuapp.com'
// const url = 'http://localhost:3001'

const userRegister = (data) => {
    return async (dispatch) => {
        try {
            dispatch(userActions.setNotification({ status: 'loading' }))
            const response = await fetch(
                'https://shopeebe.herokuapp.com/users/register',
                {
                    method: 'POST',
                    body: JSON.stringify({ email: data.email, password: data.password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            const result = await response.json()
            if (!result.success) {
                toast.error(result.message)
            }
            if (result.success) {
                dispatch(userActions.login(result.token))
                dispatch(userActions.setNotification({ status: 'success' }))
                localStorage.setItem('token', result.token)
                toast.success('Đăng ký thành công!')
            }
        } catch (error) {
            console.log(error)
            dispatch(
                userActions.setNotification({ status: 'error', message: error.message })
            )
            toast.error(error.message)
        }
        dispatch(userActions.setIsLoading(false))
        dispatch(userActions.setNotification({}))
    }
}

const userLogout = (token) => {
    console.log('logingout...')
    return async (dispatch) => {
        try {
            const res = await fetch('https://shopeebe.herokuapp.com/users/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            if (res.status === 401) {
                dispatch(userActions.logout())
                localStorage.removeItem('token')
            }
            const result = await res.json()

            if (!result.success) {
                throw new Error('Có lỗi xảy ra vui lòng thử lại sau !')
            }
            if (result.success) {
                localStorage.removeItem('token')
                dispatch(userActions.logout())
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
}

const userLogin = (data) => {
    return async (dispatch) => {
        dispatch(userActions.setNotification({ status: 'loading' }))
        try {
            const res = await fetch(`${url}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await res.json()
            console.log(result)

            if (result.success === false) {
                throw new Error(
                    'Đăng nhập không thành công vui lòng kiểm tra lại thông tin'
                )
            }
            dispatch(userActions.login(result.token))
            dispatch(userActions.setNotification({ status: 'success' }))
            localStorage.setItem('token', result.token)
            toast.success('Đăng nhập thành công!')

            console.log(result)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        dispatch(userActions.setNotification({}))
    }
}

const googleLogin = () => {
    return async (dispatch) => {
        try {
            window.open(`${url}/oauth/google`)
            // const res = await fetch(`${url}/users/login`)

            // console.log(res)

            // const result = await res.json()

            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export { userRegister, userLogout, userLogin, googleLogin }

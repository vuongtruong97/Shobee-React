import { createSlice } from '@reduxjs/toolkit'

const persistedToken = localStorage.getItem('token')

const initialState = {
    token: persistedToken,
    fetched: false,
    info: {
        firstName: '',
        lastName: '',
        email: '',
        avatarUrl: '',
        permission: '',
    },
    isLoggedIn: !!persistedToken,
    notification: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setNotification(state, action) {
            state.notification = { status: action.payload.status, error: action.payload.error, message: action.payload.message }
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        login(state, action) {
            state.token = action.payload
            state.isLoggedIn = true
        },
        logout(state) {
            state.token = undefined
            state.isLoggedIn = false
        },
    },
})

const userActions = userSlice.actions
const userReducer = userSlice.reducer

export { userActions, userReducer }

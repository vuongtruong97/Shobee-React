import { createSlice } from '@reduxjs/toolkit'

const persistedIsDarkMode = localStorage.getItem('isDarkMode')

const initialState = {
    isDarkMode: persistedIsDarkMode === 'true' ? true : false,
    firstLoad: true,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsDarkMode(state, action) {
            state.isDarkMode = action.payload
        },
        setFirstLoad(state, action) {
            state.firstLoad = action.payload
        },
    },
})

const uiActions = uiSlice.actions
const uiReducer = uiSlice.reducer

export { uiActions, uiReducer }

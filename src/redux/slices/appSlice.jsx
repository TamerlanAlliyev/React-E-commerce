import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
}

export const loadingSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})

export const { } = loadingSlice.actions
export default loadingSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchOtherUser } from '../../../utils/actions'

const initialState = {
    list: [],
    error: undefined,
    status: 'idle'
}

export const fetchOtherUserAsync = (login) => createAsyncThunk(
    'otheruser/fetchOtherUser',
    async () => {
        const response = await fetchOtherUser(login)
        return response.data
    }
)

export const otherUserSlice = createSlice({
    name: 'otheruser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchOtherUserAsync.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(fetchOtherUserAsync.rejected, (state, action) => {
            state.status = 'idle'
            state.error = action.error
        })
        .addCase(fetchOtherUserAsync.fulfilled, (state, action) => {
            state.status = 'idle'
            state.list = action.payload
        })
    },
}) 

export const otherUser = (state) => state.otheruser.list

export default otherUserSlice.reducer


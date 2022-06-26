import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../../actions";

const initialState = {
    user: [],
    status: 'idle',
    error: null
}

export const fetchAnUser = createAsyncThunk(
    'anuser/fetchAnUserStatus',
    async (login) => {
        const response = await fetchUserById(login)
        return response
    }
)

export const anUserSlice = createSlice({
    name: 'anuser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnUser.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchAnUser.rejected, (state, action) => {
                if (state.status === 'pending') {
                    state.status = 'idle'
                    state.error = action.error
                }
            })
            .addCase(fetchAnUser.fulfilled, (state, action) => {
                state.status = 'idle'
                state.user = action.payload
            })
    }
})

export const anUser = (state) => state.anuser.user
export const userStatus = (state) => state.anuser.status

export default anUserSlice.reducer
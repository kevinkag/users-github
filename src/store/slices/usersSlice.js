import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from '../../actions';

const initialState = {
    list: [],
    id: '',
    search: [],
    mode: 'list',
    status: 'idle',
    error: null
}


export const fetchAllUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchUsers();
        return response.data;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        },
        search: (state, action) => {
            const list = state.list
            const filterList = list.filter((item) => item.login.includes(action.payload))
            state.list = filterList
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsersAsync.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchAllUsersAsync.rejected, (state, action) => {
                if (state.status === 'pending') {
                    state.status = 'idle'
                    state.error = action.error
                }
            })
            .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.list = action.payload
            })
    }
})

export const { setMode, setId, search } = usersSlice.actions

export const getListUsers = (state) => state.users.list
export const getMode = (state) => state.users.mode
export const getId = (state) => state.users.id
export const getStatus = (state) => state.users.status


export default usersSlice.reducer

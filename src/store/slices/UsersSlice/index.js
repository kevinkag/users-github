import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../../../utils/actions';

const initialState = {
    list: [],
    user: [],
    search: [],
    empty: [],
    status: 'idle',
    error: undefined,
};

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
        setAllUsers: (state, action) => {
            state.list = action.payload
        },
        setDataByKey: (state, action) => {
            state.user = action.payload
        },
        search: (state, action) => {
          const ListFilter = state.list
          const resultado = ListFilter.filter((item) => item.login.includes(action.payload))
          state.search = resultado
        },
        cleanSearch: (state, action) => {
            state.search = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsersAsync.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.list = action.payload;
            })
            .addCase(fetchAllUsersAsync.rejected, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.error = action.error
                }    
            });
    },

});

export const { setAllUsers , search, setDataByKey, cleanSearch } = usersSlice.actions;

export const usersList = (state) => state.users.list
export const userDetails = (state) => state.users.user
export const searchUsers = (state) => state.users.search


export const getAllUsers = () => (dispatch) => {
    dispatch(fetchAllUsersAsync(setAllUsers));   
};

export default usersSlice.reducer

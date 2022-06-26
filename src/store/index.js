import { configureStore, } from '@reduxjs/toolkit';
import anUserSlice from './slices/anUserSlice';
import usersSlice from './slices/usersSlice';


export const store = configureStore({
  reducer: {
    users: usersSlice,
    anuser: anUserSlice,
  },
});

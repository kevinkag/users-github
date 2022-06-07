import { configureStore } from '@reduxjs/toolkit';
import { otherUserSlice } from './slices/UserOtherSlice';
import usersSlice from './slices/UsersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    otheruser: otherUserSlice,
  },
});

"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/users/userSlice";
import authReducer from "@/features/auth/authSlice";
import adminReducer from "@/features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    admin: adminReducer,
  },
});

// --- TypeScript types ---
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

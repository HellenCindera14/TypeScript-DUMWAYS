import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/authSlace';
export const {
    AUTH_LOGIN,
} = authSlice.actions
export const authReducer = authSlice.reducer;
const rootReducer = combineReducers({
    auth :authReducer,
})
export default rootReducer;

    // AUTO_CHECK,
    // AUTH_ERROR,
    // AUTH_LOGOUT
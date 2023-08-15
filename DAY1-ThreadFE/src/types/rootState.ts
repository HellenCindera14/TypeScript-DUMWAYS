
import { combineReducers } from '@reduxjs/toolkit';
import  { authSlice }  from '../../types/rootReducer';
export const {
    AUTH_LOGIN,
} = authSlice.actions
export const authReducer = authSlice.reducer;
const rootReducer = combineReducers({
    auth :authReducer,
})
export default rootReducer;
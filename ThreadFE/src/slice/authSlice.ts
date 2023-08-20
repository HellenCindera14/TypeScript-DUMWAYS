import { IUser } from "../interface/users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialAuthState: IUser = {
  id: "",
  fullname: "",
  username: "",
  password: "",
  email: "",
  description: "",
  picture: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authLogin: (state, action: PayloadAction<{ token: string; user: IUser }>) => {
      const payload = action.payload;
      console.log("ini data payload : ", payload);
      localStorage.setItem("token", payload.token);
      state.id = payload.user.id;
      state.email = payload.user.email;
      state.username = payload.user.username;
      state.fullname = payload.user.fullname;
    },
    authCheck: (state, action) => {
      // Implementasi pengecekan autentikasi
    },
    authError: (state) => {
      // Implementasi penanganan kesalahan
    },
    authLogout: (state) => {
      // Implementasi logout
      return initialAuthState;
    },
  },
});

export const { authLogin, authCheck, authError, authLogout } = authSlice.actions;

export default authSlice.reducer;

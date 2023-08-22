// import { IUser } from "../../interface/users";
// import { setAuthToken } from "../../lib/api";
// import { createSlice } from "@reduxjs/toolkit";

// const initialAuthState: IUser = {
//   id: "",
//   email: "",
//   fullname: "",
//   username: "",
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     AUTH_LOGIN: (_, action) => {
//       const payload = action.payload;
//       setAuthToken(payload.token);
//       localStorage.setItem("token", payload.token);

//       const user: IUser = {
//         id: payload.user.id,
//         fullname: payload.user.fullname,
//         username: payload.user.username,
//         email: payload.user.email,
//       };

//       return user;
//     },
//     AUTH_CHECK: (_, action) => {
//       const payload = action.payload;
      
//       const user: IUser = {
//         id: payload.id,
//         fullname: payload.fullname,
//         username: payload.username,
//         email: payload.email,
//       };

//       return user;
//     },
//     AUTH_ERROR: () => {
//       localStorage.removeItem("token");
//     },
//     AUTH_LOGOUT: () => {
//       localStorage.removeItem("token");
//     },
//   },
// });
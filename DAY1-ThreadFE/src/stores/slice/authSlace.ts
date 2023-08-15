// import IUser  from "../../interface/users";

// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// const initialAuthstate: IUser = {
//     id: "",
//     fullname: "",
//     username: "",
//     password: "",
//     email: "",
//     description: "",
//     picture: "",
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthstate,
//   reducers: {

//     AUTH_LOGIN: (state, action: PayloadAction<{ token: string; user: IUser }>) => {
//       const payload = action.payload;
    
//       localStorage.setItem("token", payload.token);
    
//       state.id = payload.user.id;
//       state.email = payload.user.email;
//       state.username = payload.user.username;
//       state.fullname = payload.user.fullname;
//       state.description = payload.user.description;
//       state.picture = payload.user.picture;

//       return state;
//     },
    
//   },
// });

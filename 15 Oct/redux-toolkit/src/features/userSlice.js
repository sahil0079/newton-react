import { createSlice } from "@reduxjs/toolkit";
//setup our redux toolkit

//actions and reducers

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            //logic for login
            console.log('loginaction', { state, action })
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
});

console.log('userSlice', userSlice)
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

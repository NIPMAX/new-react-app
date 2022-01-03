import {createSlice} from "@reduxjs/toolkit"

export const userSlicer = createSlice( {
    name : "user", //NAME OF THE STORE
    initialState: {
        user : {}
    },
    reducers: {
        login: (state,action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }

})

export const {login, logout} =userSlicer.actions;
export const selectUser  = (state) => state.user.user;
export default userSlicer.reducer;


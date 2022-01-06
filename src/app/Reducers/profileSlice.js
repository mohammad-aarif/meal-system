import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileData:{},
    role: 'member'
}
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
        profileAction : (state, action) => {
            state.profileData = action.payload
        },
        profileRole: (state, action) => {
            state.role = action.payload
        }
    }
})
export const {profileAction} = profileSlice.actions
export default profileSlice.reducer
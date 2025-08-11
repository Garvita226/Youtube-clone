import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        opacity: 100
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
        changeOpacity: (state, action) => {
            state.opacity = action.payload;
        }
    }
})

export const {toggleMenu, closeMenu, changeOpacity} = appSlice.actions;
export default appSlice.reducer;
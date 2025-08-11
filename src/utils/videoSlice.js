import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videos',
    initialState: [],
    reducers: {
        searchVideos: (state, action) => {
            return action.payload;
        }
    }
})

export const {searchVideos} = videoSlice.actions;
export default videoSlice.reducer;
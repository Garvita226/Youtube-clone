import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'
import searchReducer from './searchSlice'
import videoReducer from './videoSlice'

const store = configureStore({
    reducer: {
        app: appReducer,
        search: searchReducer,
        videos: videoReducer
    }
})

export default store
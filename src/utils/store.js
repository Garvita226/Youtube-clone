import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'
import searchReducer from './searchSlice'
import videoReducer from './videoSlice'
import chatReducer from './chatSlice'

const store = configureStore({
    reducer: {
        app: appReducer,
        search: searchReducer,
        videos: videoReducer,
        chat: chatReducer
    }
})

export default store
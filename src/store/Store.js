import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../Features/UserSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, userReducer)
const  store = configureStore({
    reducer:{
        user: persistedReducer,
    }

})


export default store;


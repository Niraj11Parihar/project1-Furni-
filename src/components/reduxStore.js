import { configureStore } from  "@reduxjs/toolkit"
import productReducer from "./appSlice"

const store = configureStore({
    reducer:{
        products : productReducer,
    },
});

export default store;
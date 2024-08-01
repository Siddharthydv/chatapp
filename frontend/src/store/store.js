import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice.js'
const store=configureStore({
    reducer:{
        userdetails:userReducer}
})
export default store
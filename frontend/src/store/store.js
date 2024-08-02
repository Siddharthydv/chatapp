import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice.js'
import authstatus from './authstatus.js'
const store=configureStore({
    reducer:{
        userdetails:userReducer,
        authStatus:authstatus
    }
})
export default store
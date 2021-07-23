import userReducer from "./user";
import isLoggedIn from "./isLoggedIn";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    userReducer: userReducer,
    isLoggedIn: isLoggedIn
})

export default allReducers
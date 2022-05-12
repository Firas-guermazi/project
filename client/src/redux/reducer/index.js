import { combineReducers } from "redux";
import CounterReducer from './calender-reducer'
import  ContactReducer  from "./reducer";

const rootReducer=combineReducers({ContactReducer, CounterReducer})
export default rootReducer
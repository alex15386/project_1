import { applyMiddleware, combineReducers, createStore } from "redux"
import { customersReducer } from "./customersReducer"
import { thunk } from "redux-thunk"
import { counterReducer } from "./counterReducer"


const rootReducer = combineReducers({
  customers: customersReducer,
  counter: counterReducer
})

export const store = createStore(rootReducer)
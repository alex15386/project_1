import { combineReducers, createStore } from "redux"
import { customersReducer } from "./customersReducer"


const rootReducer = combineReducers({
  customers: customersReducer
})

export const store = createStore(rootReducer)
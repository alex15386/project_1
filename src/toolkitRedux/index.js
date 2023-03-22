import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
  counter: toolkitSlice
})

export const store = configureStore({
  reducer: rootReducer
})
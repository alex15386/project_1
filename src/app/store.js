import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import postsReducer from "./postsSlice"

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  posts: postsReducer
})

export const store = configureStore({
  reducer: rootReducer,
})
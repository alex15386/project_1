import { combineReducers, configureStore } from "@reduxjs/toolkit"
import postsSlice from "../components/posts/postsSlice"
import usersSlice from "../components/users/usersSlice"


const rootReducer = combineReducers({
  posts: postsSlice,
  users: usersSlice,
})

export const store = configureStore({
  reducer: rootReducer
})
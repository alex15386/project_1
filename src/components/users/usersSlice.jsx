import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {id: '0', name: 'Oleksii Naidonov'},
  {id: '1', name: 'Alexander Gorchakov'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})


export const selectAllUsers = state => state.users

export default usersSlice.reducer
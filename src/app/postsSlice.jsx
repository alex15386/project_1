import { createSlice } from "@reduxjs/toolkit";
  

const initialState = [
  {id: '1', title: 'IgE', content: 'IgE is thought to react with the parasite to form immune complexes that are bound by macrophages via surphace receptors for the Fc region of IgE'},
  {id: '2', title: 'IgG', content: 'IgG is thought to be an important part against both intracellular and extracellular pathogens'},
]


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
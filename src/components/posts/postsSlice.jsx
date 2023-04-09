import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = [
  {id: 1, title: 'IgM', content: 'IgM components composed of two heavy and two light chains which are linked together by disulfide bonds'},
  {id: 2, title: 'IgM', content: 'IgM is the first antibody built during an immune response'}
]


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
      state.push(action.payload)
      },
      prepare(title, content, userID){
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userID
          }
        }
      }
    }
  }
})

export const selectAllPosts = state => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
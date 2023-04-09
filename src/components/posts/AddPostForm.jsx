import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postAdded } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"

const AddPostForm = () => {

const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [userID, setUserID] = useState('')

const users = useSelector(selectAllUsers)

const dispatch = useDispatch()

const onTitleChanged = e => setTitle(e.target.value)
const onContentChanged = e => setContent(e.target.value)
const onAuthorChanged = e => setUserID(e.target.value)

const onSavePostClicked = () => {
  if (title && content) {
    dispatch(
      postAdded(title, content, userID)
    )
    setTitle('')
    setContent('')
  }
}

const usersOptions = users.map(user => (
  <option key={user.id} value={user.id}>
    {user.name}
  </option>
))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <div className="row">
          <label htmlFor="postTitle"
          className="col-sm-2 col-form-label"
          >Post Title:</label>
          <div className="col-sm-10">
              <input 
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
              className="form-control"
              />
          </div>

          <label htmlFor="postAuthor"
          className="col-sm-2 col-form-label"
          >Author:</label>
          <div className="col-sm-10">
            <select id="postAuthor" value={userID} onChange={(e) =>setUserID(e.target.value)}>
              <option value=""></option>
              {usersOptions}
            </select>
          </div>

            <label htmlFor="postContent"
            className="col-sm-2 col-form-label"
            >Content:</label>
          <div className="col-sm-10">
              <textarea 
              name="postContent" 
              id="postContent"
              placeholder="leave a comment here"
              className="form-control"
              value={content}
              onChange={onContentChanged}
              />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={onSavePostClicked}
        >Save Post</button>
      </form>
    </section>
  )

}

export default AddPostForm

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { booksCollectionRef } from "../lib/firestore.collections";
import { db } from "../lib/init-firebase";

export default function AddBook() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if(title === '') {
      return
    }
    addDoc(booksCollectionRef, { title, author })
      .then(response => {
        console.log(response.id);
      }).catch(err => {
        console.log(err.message);
      })
    alert(title)
  }

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="w-50 p-3 rounded"
        style={{background: "#eee"}}
      >
      <form onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className="mb-3 row">
          <label htmlFor="title"
          className="col-sm-2 col-form-label"
          >Title:</label>
          <div className="col-sm-10">
            <input
              id="title"
              type="text" 
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          
        </div>
        <div className="mb-3 row">
          <label htmlFor="author"
            className="col-sm-2 col-form-label"
          >Author:</label>
          <div className="col-sm-10">
            <select
                id="author"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
                className="form-select"
              >
              <option selected value="">Open this select menu</option>
              <option value="fedor">fedor</option> 
              <option value="alexander">alexander</option> 
            </select>
          </div>
            
        </div>
        <button
          className="btn btn-success"
        >Add Blog</button>
      </form>
      </div>
      
    </div>
  )
}

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/init-firebase";

export default function AddBook() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === '') {
      return
    }
    const booksCollectionRef = collection(db, 'books')
    addDoc(booksCollectionRef, {title, author})
      .then((response) => {
        console.log(response, response.id);
      }).catch(err => {
        console.log(err.message);
      })
    alert(title)
  }

  return (
    <div className="container">
      <h2 className="my-5">Add Books</h2>
      <form
        onSubmit={handleSubmit}
        className="w-50 p-3 rounded"
        style={{backgroundColor: "#eee"}}
      >
        <div className="row mb-3">
          <div className="col-sm-12 text-center">
            <div className="h3">Books</div>
          </div>
        </div>
      <div className="mb-3 row">
        <label htmlFor="books"
        className="col-sm-2 col-form-label"
        >Books:</label>
        <div className="col-sm-10">
          <input 
            id="books"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 form-control"
            />
        </div>
      </div>  
      <div className="mb-3 row">
        <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
        <div className="col-sm-10">
          <select
            id="author"
            required
            className="form-select"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option selected value="">Open the menu</option>
            <option value="fedor">Fedor</option>
            <option value="alexander">Alexander</option>
          </select>
        </div>
      </div>
          
          <button className="btn btn-success">Add Blog</button>
          <p>{author}</p>
      </form>
    </div>
  )
}

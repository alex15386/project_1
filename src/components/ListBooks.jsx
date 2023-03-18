import {collection, getDocs} from "firebase/firestore"
import {db} from "../lib/init-firebase"
import { useState, useEffect } from "react"
import AddBook from "./AddBook"

const ListBooks = () => {

  const [books, setBooks] = useState([])
  const [isToggle, setIsToggle] = useState(true)

useEffect(() => {
  getBooks()
}, [])

useEffect(() => {
  console.log(books);
}, [books])

const getBooks = () => {
  const collectionBooksRef = collection(db, 'books')
  getDocs(collectionBooksRef)
    .then((response) => {
      const books = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
      }))
      setBooks(books)
    })
}


  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          {isToggle && <RenderBooks books={books}/>}
          {!isToggle && <p>Click to render book</p>}
          <div className="btn btn-primary"
            onClick={() => setIsToggle(!isToggle)}
          >Toggle button</div>
        </div>
      </div>
    </div>
  );
}

export default ListBooks;



const RenderBooks = ({books}) => {
  return (
    <>
      <ul className="list-unstyled">
        {books.map(book => (
          <div key={book.id}>
            <h4>{book.data.title}</h4>
            <p>{book.data.author}</p>
          </div>
        ))}
      </ul>
    </>
  )
}
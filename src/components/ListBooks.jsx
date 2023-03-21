import {collection, getDocs} from "firebase/firestore"
import {db} from "../lib/init-firebase"
import { useState, useEffect } from "react"
import AddBook from "./AddBook"
import { booksCollectionRef } from "../lib/firestore.collections"
import EditBook from "./EditBook"

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
  getDocs(booksCollectionRef)
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
          <AddBook />
          <EditBook />
        </div>
      </div>
    </div>
  );
}

export default ListBooks;



const RenderBooks = ({books}) => {

  const [show, setShow] = useState(true)


  return (
    <>
      <ul className="list-unstyled">
        {books.map(book => (
          <div key={book.id}>
            <h4>{book.data.title}</h4>
            <p>{book.data.author}</p>
            {show ? <p>{book.id}</p> : <p></p>}
            <hr />
          </div>
        ))}
      </ul>
      <ShowID show={show} setShow={setShow} />
    </>
  )
}


const ShowID = ({show, setShow}) => {

  return (
    <div className="my-3">
      <button className="btn btn-warning"
        onClick={() => setShow(!show)}
      >Show ID</button>
    </div>
  )
}
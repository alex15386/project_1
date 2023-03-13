import {collection, getDocs} from "firebase/firestore"
import {db} from "../lib/init-firebase"
import { useState, useEffect } from "react"

const ListBooks = () => {

  const [books, setBooks] = useState([])
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    getBooks()
  }, [])

  useEffect(() => {
    console.log(books);
  }, [books])

  const getBooks = () => {
    setTimeout(() => {
      const booksCollectionRef = collection(db, 'books')
      getDocs(booksCollectionRef)
        .then(response => {
          const books = response.docs.map(doc => ({
            data: doc.data(),
            id: doc.id,
          }))
          setBooks(books)
          setIsPending(false)
        })
    }, 1000)
    
  }


  return (
    <div className="container my-5">
      {isPending && <p>Loading...</p>}
      
    </div>
  );
}

export default ListBooks;

function GetRefresh() {

  return(
    <div className="my-2">
      <button className="btn btn-success"
      onClick={() => window.location.reload()}
      >refresh</button>
    </div>
  )
}

const RenderBooks = ({}) => {
  return (
    <>
      
    </>
  )
}
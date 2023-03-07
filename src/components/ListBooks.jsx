import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/init-firebase";



const ListBooks = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBook()
  }, [])

  useEffect(() => {
    console.log(books);
  }, [books])

  const getBook = () => {
    const booksCollectionRef = collection(db, 'books')
    getDocs(booksCollectionRef)
      .then(response => {
        const bks = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }));
        setBooks(bks)
      })
      .catch(error => console.log(error.message))
  }

  return (
    <div className="container">
      <div className="my-5">
        <ul>
          {books.map(item => (
            <li key={item.id}>{item.data.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListBooks;


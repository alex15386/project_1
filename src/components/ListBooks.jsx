import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/init-firebase";



const ListBooks = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  useEffect(() => {
    console.log(books);
  }, [books])

  const getBooks = () => {
    const booksCollectionRef = collection(db, 'books')
    getDocs(booksCollectionRef)
      .then(response => {
        const bks = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setBooks(bks)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="container">
      <CustomComponent books={books} />
    </div>
  );
}

export default ListBooks;


const CustomComponent = (props) => {
  const books = props.books

  const [isToggle, setIsToggle] = useState(false)


  return(
    <div className="my-5">
      <ul>
        {isToggle 
          ?
        <>
          {books.map(book => (
            <article key={book.id} className="bg-info bg-gradient p-1 my-1
            rounded
            ">
              <h2>{book.data.title}</h2>
              <p>{book.data.author}</p>
            </article>
          ))}
        </>
          :
          <p>Is not rendered</p>
        }
      </ul>
      <CustomButton 
      isToggle={isToggle} 
      setIsToggle={setIsToggle}
      className="btn btn-success"
      >Toggle</CustomButton>
    </div>
  )
}

const CustomButton = ({isToggle, setIsToggle, children, ...props}) => {

  return(
    <>
      <button 
        onClick={() => setIsToggle(!isToggle)}
      {...props}
      >{children}</button>
    </>
  )
} 

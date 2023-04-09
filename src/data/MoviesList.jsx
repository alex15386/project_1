import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./firebase"
import React from "react"



export const MoviesList = () => {
  const [movies, setMovies] = useState([])



  useEffect(() => {
    getMovies()
    console.log(movies);
  }, [])

  const getMovies = () => {
    onSnapshot(collection(db, 'movies'), (snapshot)=> {
      const movs = snapshot.docs.map(doc => doc.data());
      setMovies(movs)
    })
  }

  return (
    <Wrapper movies={movies} />
  )
}


const Wrapper = ({movies}) => {
  return(
    <React.Fragment>
    <h2>MoviesList</h2>
    <ul className="list-unstyled">
      {movies && movies.map(mov => {
        return(
          <React.Fragment>
            <li key={mov.id}>
              {mov.name}
            </li>
          </React.Fragment>
        )
      })}
    </ul>
    </React.Fragment>
  )
}



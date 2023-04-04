import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../lib/init-firebase"

const ListMovies = ({...props}) => {

  const [movies, setMovies] = useState('')


  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    console.log(movies);
  }, [movies])

  const getMovies = () => {
    const moviesCollectionRef = collection(db, 'movies')
    getDocs(moviesCollectionRef).then(response => {
      const movies = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      setMovies(movies)
    }).catch(error => {
      console.log(error);
    })

    
  }


  return (
    <div {...props}>
      <div>ListMovies</div>
      <ul className="list-unstyled">
        {movies && movies.map(movie => (
          <li key={movie.key}>{movie.data.name}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default ListMovies
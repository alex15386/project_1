import { useState } from "react"
import ListMovies from "./ListMovies"
import { AddMovie } from "./AddMovie"



export const Base = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <div class="card text-center bg-info bg-gradient my-5">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          {toggle && <ListMovies />}
          {!toggle && <AddMovie />}
        </p>
        <button
        className="btn btn-outline-secondary"
        onClick={() => setToggle(!toggle)}
        >Add Movie</button>
      </div>
    </div>
    </div>
  )
}

import { addDoc, collection } from "firebase/firestore"
import { db } from "../../lib/init-firebase"
import { useState } from "react"



export const AddMovie = () => {

  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if(name === '') return
    const moviesCollectionRef = collection(db, 'movies')
    addDoc(moviesCollectionRef, { name }).then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  return (
    <Wrapper className="bg-warning bg-gradient rounded">
      <form
        onClick={handleSubmit}
      >
        <div className="row mb-3">
          <div className="col-sm-2 col-form-label">Name:</div>
          <div className="col-sm-10">
            <input 
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            className="form-control"/>
          </div>
        </div>
        <button
          className="btn btn-outline-success"
          type="submit"
          >Add</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = ({children, ...props}) => {
  return (
  <div className="container">
    <div className="card my-5" {...props}>
      <div className="card-body">
        {children}
      </div>
    </div>
  </div>);
}

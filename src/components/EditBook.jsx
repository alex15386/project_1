import { doc, updateDoc } from 'firebase/firestore'
import { db } from './../lib/init-firebase'
import { useState } from 'react'


export default function EditBook() {

  const [title, setTitle] = useState('')
  const [id, setID] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === '' || id === ''){
      return
    }
    const docRef = doc(db, 'books', id)
    updateDoc(docRef, { title })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <SectionOne id={id} setID={setID} />
        <SectionTwo title={title} setTitle={setTitle} />
      </form>
    </div>
  )
}

const SectionOne = ({id, setID}) => {

  return (
    <>
      <div className="row mb-3">
        <label htmlFor="id" className="col-sm-2 col-form-label">BookID:</label>
        <div className="col-sm-10">
          <input
            id='id'
            type="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
            className="form-control"
            />
        </div>
      </div>
    </>
  )
}


const SectionTwo = ({title, setTitle}) => {

  return (
    <>
      <div className="md-3 row">
          <label htmlFor="title"
            className="col-sm-2 col-form-label"
          >Title:</label>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-8">
                  <input 
                  id="title"
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-select"
                  />
              </div>
              <div className="col-sm-4">
                <SetButtons />
              </div>
            </div>
            
          </div>
        </div>
    </>
  )
}

const SetButtons = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <button className="btn btn-success">Update book</button>
        </div>
        <div className="col-sm-6">
          <button className="btn btn-info"
          onClick={() => window.location.reload()}
          >Refresh page</button>
        </div>
      </div>
    </>
  )
}
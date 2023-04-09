import Axios from 'axios'
import { useEffect, useState } from 'react'


const Users = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      setData(response.data)
    }).catch(error => console.log(error.message))
  }, [])

  const output = data.map(response => {
    return(
      <tr>
        <td style={{border:'1px solid black'}}>{response.id}</td>
        <td style={{border:'1px solid black'}}>{response.title}</td>
        <td style={{border:'1px solid black'}}>{response.body}</td>
      </tr>
  )
  })

  
  return (
    <>
      <div className="container">
        <Output />
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
            {output && output}
        </table>
      </div>
    </>
  )
}

export default Users


const Output = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const postData = (e) => {
    e.preventDefault();
    Axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    }).then((res) => console.log('Post added', res)).catch(err => console.log(`rejected - ${err}`))
  }

  return(
    <>
      <div className="row my-5 bg-info bg-gradient rounded py-2">
        <div className="mb-3 row">
        <label htmlFor="title" className='col-sm-2 col-form-label'>Title:</label>
        <div className="col-sm-10">
          <input 
            type="text"
            required
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        </div>
        <div className="row mb-3">
        <label htmlFor="body" className='col-sm-2 form-label'>Body:</label>
        <div className="col-sm-10">
          <input 
            type="text"
            required
            id='body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className='form-control'
          />
        </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-outline-success'
          onClick={postData}
          >Add Blog</button>
        </div>
        
      </div>
    </>
  )
}
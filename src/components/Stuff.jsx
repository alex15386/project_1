import { useEffect, useState } from "react"
import Axios from "axios"


export const Stuff = () => {

  const [data, setData] = useState([])
  const [con, setCon] = useState()
  
  const eachCon = (array, n) => {
    const r = [];
    for(let i = 0; i <= array.length - n; i++) {
      const chunk = [];
      for(let j = i; j < i + n; j++) {
        chunk.push(array[j],)
      }
      r.push(chunk, "; ")
    }
    return r
  }
  
  useEffect(() =>{
    const result = eachCon([1, 2, 3, 4, 5], 2)
    setCon(result)
  }, [])
  

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      setData(response.data)
      console.log(response.data);
    }).catch(err => console.log(err.message))
  }, [])


  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    )
  }) 


  return (
    <>
      <div>
        {con}
        <button className="btn btn-outline-success">click here</button>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {arr}
        </table>
      </div>
    </>
  )
}


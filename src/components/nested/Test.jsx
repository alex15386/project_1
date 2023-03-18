import { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getBooks('http://localhost:8000/blogs')
      .then((data) => {
        setData(data)
      }).catch(err => {
        console.log('promise rejected:', err);
      })
  }, [])

  
const getBooks = (resource) => {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText)
          resolve(data)
        } else if(request.readyState === 4) {
          reject('error getting resource')
        }
      })
      request.open('GET', resource)
      request.send()
    })
}

  return (
    <div className="container">
      <Output data={data} className="list-unstyled my-5 bg-success" />
    </div>
  );
}

export default Test;


const Output = ({data, ...props}) => {
  return (
    <ul {...props}>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

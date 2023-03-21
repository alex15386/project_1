import { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState(null)


  const findShortest = (str) => {
    return str.split('').sort((a, b) => a.length - b.length)[0]
  }

  useEffect(() => {
    console.log(findShortest('IgM is the first antibody'));
  }, [])

  
  
  useEffect(() => {
    getBooks()
      .then(data => console.log(data))
      .catch(error => console.log(error.message))

  }, [])

const getBooks = async () => {
  const response = await fetch('http://localhost:8000/blogs')
  const data = await response.json()
  return data
}

  return (
    <div className="container">
      <div className="btn btn-success"
        onClick={() =>findShortest()}
      >Click</div>
    </div>
  );
}

export default Test;


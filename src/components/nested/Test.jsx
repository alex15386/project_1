import { useEffect, useState } from "react";

const Test = () => {
  
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:8000/blogs')
        const data = await response.json()
        setBlogs(data)
        setIsPending(false)
      }
      fetchData()
        .then(() => console.log('data fetched'))
    },1000)
    
  }, [])

  return (
    <div className="container">
      <CreatePending isPending={isPending} />
      {blogs && (blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <p className="h4">{blog.name}</p>
          <div>{blog.body}</div>
          <hr />
        </div>
      )))}
      
    </div>
  );
}

export default Test;

const CreatePending = ({isPending}) => {

  return (
    <>
      {isPending && <p>Loading...</p>}
    </>
  )
}
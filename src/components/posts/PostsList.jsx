import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"


export const PostsList = () => {

  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <p>{post.id}</p>
      <hr />
    </article>
  ))

  

  return (
    <div className="container my-5">
      {renderedPosts}
    </div>
  )
}

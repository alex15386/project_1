import { Link } from "react-router-dom"


function NotFound () {
  return (
    <div>
      <div className="h2">Not Found</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nam enim sequi odit tenetur voluptatibus beatae! Accusamus eligendi beatae architecto enim labore, maxime vitae iure unde ullam consectetur nisi optio eius ipsa sint recusandae. Deserunt asperiores ipsam cupiditate culpa corrupti accusamus assumenda esse quisquam aut! Numquam est, laboriosam cupiditate similique omnis nobis, aut quibusdam illo aliquid quos neque error atque ducimus repellat. Ipsam labore ad impedit asperiores unde nesciunt, corporis sequi, similique, iusto eaque ratione iure laboriosam ut quibusdam debitis? In voluptatibus fugiat dolores nemo perspiciatis, accusantium esse itaque consequatur voluptates fugit. Non assumenda ipsum praesentium ipsam corporis voluptatum maxime.</p>

      <p>Go to the <Link to="/customers">home page</Link></p>
    </div>
  )
}

export default NotFound
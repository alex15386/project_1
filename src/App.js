import { createBrowserRouter, createRoutesFromElements, Route, Routes,
RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { PostsList } from "./components/posts/PostsList";
import AddPostForm from "./components/posts/AddPostForm";
import { MoviesList } from "./data/MoviesList";
import { Auth } from "./data/Auth";
import Users from "./components/getData/Users";







function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="posts" element={<PostsList />} />
        <Route path="addpost" element={<AddPostForm />} />
        <Route path="movieslist" element={<MoviesList />} />
        <Route path="auth" element={<Auth />} />
        <Route path="users" element={<Users />} />
      </Route>
    )
  )


  return (
        <RouterProvider router={router} />
  );
}

export default App;

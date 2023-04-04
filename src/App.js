import { createBrowserRouter, createRoutesFromElements, Route, Routes,
RouterProvider,
} from "react-router-dom";
import Counter from "./components/Counter";
import RootLayout from "./layouts/RootLayout";
import { Stuff } from "./components/Stuff";
import ListMovies from "./app/firebase.components/ListMovies";
import { Base } from "./app/firebase.components/Base";
import { AddMovie } from "./app/firebase.components/AddMovie";






function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="counter" element={<Counter />} />
        <Route path="stuff" element={<Stuff />} />
        <Route path="base" element={<Base />}>
          <Route path="listmovies" element={<ListMovies />} />
          <Route path="addmovie" element={<AddMovie />} />
        </Route>
      </Route>
    )
  )


  return (
        <RouterProvider router={router} />
  );
}

export default App;

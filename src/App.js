import { createBrowserRouter, createRoutesFromElements, Route, Routes,
RouterProvider,
} from "react-router-dom";
import Counter from "./components/Counter";
import RootLayout from "./layouts/RootLayout";





function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="counter" element={<Counter />} />
      </Route>
    )
  )


  return (
        <RouterProvider router={router} />
  );
}

export default App;

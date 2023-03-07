import { createBrowserRouter, createRoutesFromElements, Route, Routes,
RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Customers from "./components/Customers";
import ListBooks from "./components/ListBooks";
import Active from "./components/nested/Active";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="customers" element={<Customers />}>
          <Route path="active" element={<Active />} />
        </Route>
        <Route path="listbooks" element={<ListBooks />} />
      </Route>
    )
  )


  return (
        <RouterProvider router={router} />
  );
}

export default App;

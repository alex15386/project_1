import { createBrowserRouter, createRoutesFromElements, Route, Routes,
RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Customers from "./components/Customers";
import ListBooks from "./components/ListBooks";
import Active from "./components/nested/Active";
import Test from "./components/nested/Test";
import Counter from "./components/nested/Counter";
import NotFound from "./components/NotFound";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="customers" element={<Customers />}>
          <Route path="active" element={<Active />} />
        </Route>
        <Route path="listbooks" element={<ListBooks />} />
        <Route path="test" element={<Test />} />
        <Route path="counter" element={<Counter />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )


  return (
        <RouterProvider router={router} />
  );
}

export default App;

import { createBrowserRouter, createRoutesFromElements, Route, Routes,
RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Customers from "./components/Customers";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="customers" element={<Customers />} />
      </Route>
    )
  )


  return (
        <RouterProvider router={router} />
  );
}

export default App;

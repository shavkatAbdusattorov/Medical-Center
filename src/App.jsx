import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout"
import About from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"

import Favorites from "./pages/Favorites/Favorites";


function App() {
  

  const wifi = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);



  return (
    <>
      <RouterProvider router={wifi} />
    </>
  );
}

export default App

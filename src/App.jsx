import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 

// Création des routes pour les pages de l'application 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/about",
    element: <About />, 
  },
]); 

export default function App() {
 
return (
    <RouterProvider router={router}/>
  );
}

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import SignUp from "../components/Signup/SignUp";
import LoginPage from "../components/LoginPage/LoginPage"
import Art from "../pages/Courses/Art";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path:"/art",
        element:<Art/>
      },
      {
        path:"/business",
        element:<business/>
      },
      { 
        path: "/about", 
        element: <About /> 

      },
      { 
        path: "/blog", 
        element: <Blog /> 

      },
      { 
        path: "/contact",
         element: <Contact /> 

      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path:"loginpage",
    element:<LoginPage />
  }
]);

export default router;

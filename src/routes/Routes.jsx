import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";

import BookService from "../bookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path: '/',
        element: <Home></Home>
       },
       {
        path: "login",
        element: <Login></Login>
       },
       {
        path: 'signup',
        element: <SignUp></SignUp>
       },
       {
        path:"book/:id",
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params})=> fetch(`https://car-doctor-server-aalnoman2042.vercel.app/services/${params.id}`)
       },
       {
       path: 'bookings',
       element:<PrivateRoute> <Bookings></Bookings></PrivateRoute>
       }
      ]
    },
  ]);

  export default router
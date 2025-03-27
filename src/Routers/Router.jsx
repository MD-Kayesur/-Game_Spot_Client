import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../AuthProvider/Login";
import Signup from "../AuthProvider/Signup";

export const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout></MainLayout>,
     children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
     ]
   },
 ]);
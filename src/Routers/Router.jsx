import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../AuthProvider/Login";
import Signup from "../AuthProvider/Signup";
import Allreview from "../Pages/AllReview/Allreview";
import MyReview from "../Pages/MyReview/MyReview";
import AddReview from "../Pages/AddReview/AddReview";
import GameWatchList from "../Pages/GameWatchList/GameWatchList";
import ReviewDetails from "../Pages/AllReview/Details/ReviewDetails";
import UpadateReciew from "../Pages/MyReview/UpadateReciew";
import OtherAllRe from "../Pages/AllReview/OtherAllRe";
import Blog from "../Pages/Home/Blog/Blog";
import BlockDetails from "../Pages/Home/Blog/BlockDetails";
import PrivateRoute from "./PrivetRouts/PrivateRoute";

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
            path:'/blog',
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
            path:'/blog/:id',
            element:<PrivateRoute><BlockDetails></BlockDetails></PrivateRoute>
              
        },
        {
            path:'/allreviews',
            element: <Allreview></Allreview>
        },
        // {
        //     path:'/otherallre',
        //     element: <OtherAllRe></OtherAllRe>
        // },
        {
            path:'/reviewsdetails/:id',
            element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>
        },
        {
            path:'/myreview',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
            path:'/updatereview/:id',
            element: <PrivateRoute><UpadateReciew></UpadateReciew></PrivateRoute>
        },
        {
            path:'/addreview',
            element:<PrivateRoute> <AddReview></AddReview></PrivateRoute>
        },
        {
            path:'/gamewatchlist',
            element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>
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
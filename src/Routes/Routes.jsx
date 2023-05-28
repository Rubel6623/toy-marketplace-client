import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AddToys from "../Pages/AddToys/AddToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MathToys from "../Pages/ToyDetails/MathToys";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllToyDetails from "../Pages/ToyDetails/AllToyDetails";
import MyToy from "../Pages/MyToy/MyToy";
import UpdateToy from "../Pages/UpdateToys/UpdateToy";
import Blogs from "../Pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>,
          loader:()=>fetch('https://toy-marketplace-server-iota-jet.vercel.app/allToys')
        },
        {
          path:'/myToy',
          element:<PrivateRoute><MyToy></MyToy></PrivateRoute>,
          loader:()=>fetch('https://toy-marketplace-server-iota-jet.vercel.app/toy')
        },
        {
          path:'/updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://toy-marketplace-server-iota-jet.vercel.app/toy/${params.id}`)
        },
        {
          path:'/blog',
          element:<Blogs></Blogs>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/addtoys',
          element:<AddToys></AddToys>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-iota-jet.vercel.app/toys/${params.id}`)
        },
        {
          path:'/mathToys/:id',
          element:<PrivateRoute><MathToys></MathToys></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-iota-jet.vercel.app/mathToys/${params.id}`)
        },
        {
          path:'/allToys/:id',
          element:<PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-iota-jet.vercel.app/allToys/${params.id}`)
        }
      ]
    },
  ]);

export default router;
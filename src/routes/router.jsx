import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import AvailableFood from "../Pages/AvailableFood";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FoodDetails from "../Pages/FoodDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Addfood from "../Pages/Addfood";
import ManageFood from "../Pages/ManageFood";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                 loader: () => fetch(`http://localhost:3000/highestfoods`),
                Component:Home
            },{
                path:'/available',
                loader: () => fetch(`http://localhost:3000/foods`),
                Component:AvailableFood
            },{
                path:'/login',
                
                
                Component:Login
            },{
                path:'/register',
                Component:Register
            },{
                path:`/foods/:id`,
                loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`),
                element:<PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>
            },{
                path:'/addfood',
                element:<Addfood></Addfood>
            },{
                path:'/managefood',
                Component:ManageFood
            }
        ]
    }
])
export default router
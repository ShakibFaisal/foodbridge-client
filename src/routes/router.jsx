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
import Error from "../Error/Error";
import MyFoodRequest from "../Pages/MyFoodRequest";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                 loader: () => fetch(`https://foodbridge-server-three.vercel.app/highestfoods`),
                Component:Home
            },{
                path:'/available',
                loader: () => fetch(`https://foodbridge-server-three.vercel.app/foods`),
                Component:AvailableFood
            },{
                path:'/login',
                
                
                Component:Login
            },{
                path:'/register',
                Component:Register
            },{
                path:`/foods/:id`,
                loader:({params})=>fetch(`https://foodbridge-server-three.vercel.app/foods/${params.id}`),
                element:<PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>
            },{
                path:'/addfood',
                element:<PrivetRoute><Addfood></Addfood></PrivetRoute> 
            },{
                path:'/managefood',
                element:<PrivetRoute><ManageFood></ManageFood></PrivetRoute>
            },{
                path:'/myfoodrequest',
                element:<PrivetRoute><MyFoodRequest></MyFoodRequest></PrivetRoute>
            }
        ]
    }
])
export default router
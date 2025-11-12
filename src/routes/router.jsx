import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import AvailableFood from "../Pages/AvailableFood";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },{
                path:'/available',
                Component:AvailableFood
            },{
                path:'/login',
                Component:Login
            }
        ]
    }
])
export default router
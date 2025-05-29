import { createBrowserRouter } from "react-router";
import Loader from "../components/Loader";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
             path:'/jobs/:id',
             loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
             element:<JobDetails></JobDetails>,
             hydrateFallbackElement:<Loader></Loader>
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            }
        ]
    }
])
export default router;


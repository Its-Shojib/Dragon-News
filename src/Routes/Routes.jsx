import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Roots/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <NewsDetails></NewsDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
]);

export default router;
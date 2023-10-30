import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SingIn from "../pages/SingIn/SingIn";
import SignUp from "../pages/SignUp/SignUp";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <SingIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])

export default Router;
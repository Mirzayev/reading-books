
import React from "react";
import SignIn from "./components/sign-in/SignIn.jsx";
import SignUp from "./components/sign-up/SignUp.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/not-found/NotFound.jsx";


function App() {

    const router= createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/login",
            element: <SignUp/>,
        },
        {
            path: "/sign-in",
            element: <SignIn/>,
        },
        {
            path: "*",
            element: <NotFound/>,
        }

    ])



    return (

        <div className=''>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App

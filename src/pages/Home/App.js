import "./index.css"
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from "react-router-dom"
import Home from "./index"
import Signup from "../Signup"
import ResetPassword from "../ResetPassword"
import ForgotYourPassword from "../ForgotYourPassword"
import Booking from "../Booking"

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/forgotyourpassword" element={<ForgotYourPassword />} />
                <Route path="/booking" element={<Booking />} />
            </Route>

        )
    )

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

const Root = () => {

    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default App
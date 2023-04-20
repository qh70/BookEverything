import "./index.css"
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from "react-router-dom"
import Home from "./index"
import Signup from "../Signup"
import ResetPassword from "../ResetPassword"
import ForgotYourPassword from "../ForgotYourPassword"
import Booking from "../Booking"
import Payment from "../Payment"
import Detail1 from "../Detail1"
import Detail2 from "../Detail2"
import Checkout from "../Checkout"
import Homepage from "../Homepage"
import BackendLogin from "../BackendLogin"
import BackendLoginForgot from "../BackendLoginForgot"
import BackendDashboard from "../BackendDashboard"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/forgotyourpassword" element={<ForgotYourPassword />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/detail1" element={<Detail1 />} />
                <Route path="/detail2" element={<Detail2 />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/backendlogin" element={<BackendLogin />} />
                <Route path="/backendloginforgot" element={<BackendLoginForgot />} />
                <Route path="/backenddashboard" element={<BackendDashboard />} />
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
import ResetPassword from "../ResetPassword"
import Pic from "./components/Pic"
import "./index.css"
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from "react-router-dom"
import Home from "./index"
import Signup from "../Signup"

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
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
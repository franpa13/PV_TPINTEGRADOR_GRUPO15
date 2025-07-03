import { Outlet } from "react-router-dom"
import { AuthAlert } from "../components/ui/AuthAlert";

export const AuthLayout = () => {

    return (
        <div >
            <AuthAlert></AuthAlert>
            <Outlet></Outlet>
        </div>
    )
}

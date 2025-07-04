import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {
    const currentUser = useSelector((state) => state.auth.isAuthenticated);

    if (!currentUser) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col relative">
   
            <section className="flex-1">

                {children}
            </section>

     
        </div>
    )
};

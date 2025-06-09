import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";
import { useGetProducts } from "../hooks/useGetProducts";
import SpinnerComponent from "../components/ui/Spinner";
import { Error } from "../components/ui/Error";
export const MainLayout = ({ children }) => {
    const { error, loading } = useGetProducts();

    return (
        <div className="min-h-screen flex flex-col relative">
            <NavBar />

            {/* Spinner de carga*/}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center mb-32 justify-center ">
                    <SpinnerComponent open={loading} />
                </div>
            )}
            {/* en caso de mala respuesta del servidor */}
            {error && (
                <Error message="Ha ocurrido un error, intentelo nuevamente" ></Error>
            )}
            <section className="flex-1">
                {children}
                <Outlet />
            </section>

            <Footer />
        </div>
    );
};

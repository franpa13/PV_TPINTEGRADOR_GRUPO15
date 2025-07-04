import { Outlet } from "react-router-dom";
import { useGetProducts } from "../hooks/useGetProducts";
import SpinnerComponent from "../components/ui/Spinner";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";
import { ProductAlert } from "../components/ui/ProductAlert";

export const HomeLayout = () => {
  const { error, loading } = useGetProducts();
  return (
    <div className="flex flex-col relative min-h-screen">
      <NavBar />

      {/* Spinner de carga*/}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center mb-32 justify-center ">
          <SpinnerComponent open={loading} />
        </div>
      )}
      {/* en caso de mala respuesta del servidor */}
      {error && (
        <Error message="Ha ocurrido un error, intentelo nuevamente"></Error>
      )}
      <section className="flex-1">
        {!loading && <Outlet />}
        <ProductAlert />
      </section>
      <Footer />
    </div>
  );
};

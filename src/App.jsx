import { Outlet } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/navbar/NavBar';
import SpinnerComponent from './components/ui/Spinner';
import { useGetProducts } from './hooks/useGetProducts';


import { Footer } from './components/footer/Footer';

function App() {

  const { error, loading } = useGetProducts();

  return (
    <div className="min-h-screen flex flex-col relative">

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
        {!loading && (

          <Outlet />
        )}
      </section>


    </div>)
}

export default App

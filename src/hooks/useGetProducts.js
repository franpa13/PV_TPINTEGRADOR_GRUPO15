import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";

export const useGetProducts = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();

                // Simular una demora de 1 segundo extra
                await new Promise(resolve => setTimeout(resolve, 1000));

                const dataFormatted = data.map((prod) => {
                    return {
                        ...prod,
                        favorite: false
                    };
                });

                dispatch(setProducts(dataFormatted));
            } catch (err) {
                setError(err.message || "Error al obtener los productos");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [dispatch]);

    return { loading, error };
};

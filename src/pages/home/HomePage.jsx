import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../../components/Card/Card";
import { Title } from "../../components/ui/Title";
import Carrusel from "../../components/carrusel/Carrusel";
import Icon from "../../components/ui/Icon";
import FilterBar from "../../components/filtro/FiltroProductos";

export const HomePage = () => {
  const products = useSelector((state) => state.products.products);

  /* —— Estados de Filtro —— */
  const [category, setCategory] = useState("all");
  const [rating, setRating] = useState(0); // 👈  AHORA SÍ existe

  /* —— Categorías únicas para el Select —— */
  const categories = useMemo(
    () => ["all", ...new Set(products.map((p) => p.category))],
    [products]
  );

  /* —— Filtrado por categoría + rating —— */
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCat = category === "all" || p.category === category;
      const okRating = p.rating.rate >= rating;
      return okCat && okRating;
    });
  }, [products, category, rating]);

  return (
    <>
      <Carrusel />

      {/* —— Barra de filtros —— */}
      <FilterBar
        category={category}
        setCategory={setCategory}
        rating={rating}
        setRating={setRating}
        categories={categories}
      />

      {/* —— Título —— */}
      <Title
        className="text-2xl xl:text-3xl text-center mb-8 font-bernard"
        style={{ color: "#DF1074" }}
        text="Bienvenido a nuestra colección 2025"
      >
        <Icon fontSize="large" />
      </Title>

      {/* —— Productos —— */}
      <section className="p-5 w-full flex flex-col gap-5">
        <div className="flex justify-center flex-wrap gap-4 lg:gap-6">
          {filtered.length === 0 ? (
            <p>No hay productos que coincidan.</p>
          ) : (
            filtered.map((prod) => (
              <CardComponent key={prod.id} product={prod} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

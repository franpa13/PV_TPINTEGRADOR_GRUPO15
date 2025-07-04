import { Box } from "@mui/material"; // Se importa Box en vez de Typography
import CardComponent from "../../components/Card/Card";
import { Title } from "../../components/ui/Title";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone"; //Nuevo icono de corazon
import { useSelector } from "react-redux";

export const Favorites = () => {
  const products = useSelector((state) => state.products.products);
  const favorites = products.filter((product) => product.favorite);

  return (
    <div className="p-5 w-full">
      <Title
        className="flex items-center gap-2 justify-center text-2xl xl:text-3xl text-center text-pink-600  mb-3"
        text="Mis Favoritos"
      >
        <FavoriteTwoToneIcon fontSize="inherit" className="mt-1" />{" "}
        {/*Icono corazon al lado del titulo */}
      </Title>

      {favorites.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
          className="text-gray-600 text-lg"
        >
          {/* Se agrega parrafo y se le agrega ANIMACION*/}
          <p className="text-2xl font-bold text-gray-400 animate-pulse">
            ¿Sin favoritos? ¡Ponete la 10 y elegí algo!
          </p>
        </Box>
      ) : (
        <div className="flex lg:justify-center justify-center items-center lg:items-start flex-wrap gap-3 gap-y-7  lg:gap-8">
          {favorites.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

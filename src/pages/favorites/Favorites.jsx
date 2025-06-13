import { Grid, Box } from "@mui/material"; // Se importa Box en vez de Typography
import CardComponent from "../../components/ui/Card/Card";
import { Title } from "../../components/ui/Title";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'; //Nuevo icono de corazon
import { useSelector } from "react-redux";

export const Favorites = () => {
  const products = useSelector((state) => state.products);
  const favorites = products.filter((product) => product.favorite);

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <Title className="text-2xl xl:text-3xl text-center text-green-700 mb-8" text="Mis Favoritos">
          <FavoriteTwoToneIcon className="text-green-600" /> {/*Icono corazon al lado del titulo */}
        </Title>
      </div>

      {favorites.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
          className="text-gray-600 text-lg"

        >{/* Se agrega parrafo y se le agrega ANIMACION*/ }
          <p className="text-2xl font-bold text-gray-400 animate-pulse">¿Sin favoritos? ¡Ponete la 10 y elegí algo!</p> 
        </Box>
      ) : (
        <Grid container spacing={2}>
          {favorites.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <CardComponent product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
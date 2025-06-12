
import { useSelector } from 'react-redux';
import CardComponent from '../../components/ui/Card/Card';
import { Grid, Typography } from '@mui/material';
import { Title } from '../../components/ui/Title'; //  Titulo Importado

export const Favorites = () => {
  const products = useSelector((state) => state.products);

  const favorites = products.filter(product => product.favorite);

  return (
    <div className="p-4">
      
      <Title className="text-green-700 text-center mb-4" text="Mis Favoritos" />

      {favorites.length === 0 ? (
        <Typography variant="body1">No hay productos favoritos.</Typography>
      ) : (
        <Grid container spacing={2}>
          {favorites.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <CardComponent product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Rating } from '@mui/material';
import { ImageMagnifier } from './ImageMagnifier';

export const DetailProduct = () => {
    const { id } = useParams();

    const product = useSelector(state =>
        state.products.find(p => p.id === parseInt(id)));
    
    if (!product) {
        return <div>Producto no encontrado</div>;
    }   
    return (
        <Grid container spacing={4} sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
    
        }}>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 400,
                        padding: 2,
                        overflow: 'hidden'
                    }}
                >
                    <ImageMagnifier src={product.image} alt={product.name} width={400} height={400} zoom={2} />
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', maxWidth: 600 }} >{product.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rating
                        name="read-only"
                        value={product.rating.rate}
                        precision={0.1}
                        readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                        {product.rating.rate} / 5
                    </Typography>
                </Box>
                <Typography variant="h3" color="primary" gutterBottom>${product.price}</Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        maxWidth: 600,
                        textAlign: 'justify',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {product.description}
                </Typography>
                <Typography variant="body1">Categoria: {product.category}</Typography>
                <Typography variant="body2" color="text.secondary">Stock: {product.rating.count}</Typography>
            </Grid>
        </Grid>
    )
}

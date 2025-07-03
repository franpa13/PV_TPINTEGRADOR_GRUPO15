import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Box, Rating, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { ImageMagnifier } from './ImageMagnifier';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { removeProduct } from '../../store/productsSlice';
import { Error } from '../../components/ui/Error';
export const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const product = useSelector(state =>
        state.products.products.find(p => p.id === parseInt(id)));

    if (!product) {
        return <Error message='No se encontro el producto!'></Error>;
    }

    const deleteProd = () => {
        dispatch(removeProduct(product))
        navigate("/")
    }
    
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            paddingX: 50,
            paddingY: 5
        }}>

            <Grid container spacing={4} sx={{
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                margin: 0,
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}>
                <div className='flex justify-between items-center w-full'>
                    <Button
                        variant="contained"
                        startIcon={<ArrowBack />}
                        onClick={() => navigate(-1)}
                        size='small'
                    >
                        Volver
                    </Button>
                    <Button
                        variant="contained"
                        color='error'
                        endIcon={<DeleteOutlineOutlinedIcon />}
                        onClick={deleteProd}
                        size='small'
                    >
                        Eliminar
                    </Button>

                </div>

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
                    <Typography variant="h3" color="primary" gutterBottom> $ {product.price}</Typography>
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
                    <Typography variant="body4" sx={{ fontStyle: 'italic', color: 'blue' }}>Categoria: {product.category}</Typography>
                    <Typography variant="body2" color="text.secondary">Stock: {product.rating.count} unidades</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

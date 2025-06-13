import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ActionsCard } from './ActionsCard';
import { Link } from 'react-router-dom';


export default function CardComponent({ product }) {

    return (
        <Card
            sx={{
                maxWidth: 350,
                maxHeight: 700,
                // Responsivo según el tamaño del dispositivo
                '@media (max-width: 300px)': {
                    maxWidth: 400,
                    maxHeight: 700,
                },

            }}
        >
            <CardHeader
                sx={{
                    padding: 0,
                    textAlign: 'center',
                    '& .MuiCardHeader-title': {  // selector para el título
                        fontSize: '1.2rem',

                    },
                    '& .MuiCardHeader-subheader': { // selector para el subtítulo
                        fontSize: '0.9rem',
                        color: 'gray',
                    },
                }}
                title={product.title || "Paella dish"}
                subheader={`Categoria : ${product.category || "Seafood"}`}
            />
            <CardMedia
                component="img"
                sx={{
                    width: '100%',
                    height: 400,
                    padding: 1,
                    objectFit: 'cover',

                }}
                image={product.image || "https://via.placeholder.com/150"}
                alt="Paella dish"
            />
            <CardContent>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,         // Máximo de líneas visibles
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',

                    }}
                >
                    {product.description || "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup frozen peas along with the mussels, if you like."}
                </Typography>


                <div className='flex justify-between items-center mt-2'>
                    <span className='font-semibold text-lg'>${product?.price}
                    </span>
                    <ActionsCard id={product.id} isFavorite={product.favorite}></ActionsCard>
                </div>

            </CardContent>


        </Card>
    );
}

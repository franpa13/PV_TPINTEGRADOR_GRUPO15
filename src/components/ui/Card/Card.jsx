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
                maxWidth: 300,
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
          
                
                <div className='flex justify-between items-center m-2'>
                    <span className='font-semibold text-lg'>${product?.price}
                    </span>
                    <ActionsCard id={product.id} isFavorite={product.favorite}></ActionsCard>
                </div>

           


        </Card>
    );
}

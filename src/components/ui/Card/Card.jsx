import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ActionsCard } from './ActionsCard';
import { Link } from 'react-router-dom';


export default function CardComponent({ product }) {
    if (!product) {
        return null
    }

    return (
        <div className="max-w-xs w-full lg:w-1/6 rounded-md overflow-hidden shadow-lg bg-white transition-all duration-200 hover:shadow-xl flex flex-col h-62">
            {/* Product Image */}
            <Link to={`/shop/detail-product/${product.id}`} className="h-35 bg-gray-100 flex items-center justify-center p-2 relative">
                <img
                    className="max-h-full max-w-full object-contain"
                    src={product.image}
                    alt={product.title}
                />
            </Link>

            {/* Product Info */}
            <div className="p-2 flex flex-col flex-grow">
                {/* Title and Price */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-800 font-medium text-md line-clamp-2">
                        {product?.title}
                    </h3>
                    <span className="text-gray-900 font-bold ml-2 whitespace-nowrap">
                        ${product?.price}
                    </span>
                </div>


                {/* Actions */}

                <ActionsCard id={product.id} isFavorite={product.favorite} />

            </div>
        </div>
    );
}



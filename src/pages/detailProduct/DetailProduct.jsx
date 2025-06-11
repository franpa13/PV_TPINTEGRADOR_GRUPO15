import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export const DetailProduct = () => {
    const { id } = useParams();

    const product = useSelector(state =>
        state.products.find(p => p.id === parseInt(id)));
    
    if (!product) {
        return <div>Producto no encontrado</div>;
    }   
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>opiniones de otros usuarios: {product.rating.rate}</p>
            <p>stock: {product.rating.count}</p>
        </div>
    )
}

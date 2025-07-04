import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TooltipComponent from '../ui/Tooltip';
import { toggleFavorite } from '../../store/productsSlice';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
export const ActionsCard = ({ id, isFavorite }) => {

    const dispatch = useDispatch();
    const toggleFavoriteAction = () => {
        dispatch(toggleFavorite({ id }));
    }
    return (
        <div className='flex justify-between items-end gap-0'>



            {isFavorite ? (
                <TooltipComponent onClick={toggleFavoriteAction} text="Eliminar de favoritos">

                    <FavoriteOutlinedIcon fontSize='small' color='error'></FavoriteOutlinedIcon>
                </TooltipComponent>
            ) : (
                <TooltipComponent onClick={toggleFavoriteAction} text={"Agregar a favoritos"}>

                    <FavoriteBorderOutlinedIcon fontSize='small' color='error' className='cursor-pointer'></FavoriteBorderOutlinedIcon>
                </TooltipComponent>

            )
            }
            <Link to={`/shop/edit-product/${id}`}>
                <TooltipComponent text="Editar producto">
                    <BorderColorOutlinedIcon fontSize='small' className='cursor-pointer' color='info'></ BorderColorOutlinedIcon>

                </TooltipComponent>
            </Link>

        </div>
    )
}

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TooltipComponent from '../Tooltip';
import { toggleFavorite } from '../../../store/productsSlice';
export const ActionsCard = ({ id, isFavorite }) => {

    const dispatch = useDispatch();
    const toggleFavoriteAction = () => {
        dispatch(toggleFavorite({ id }));
    }
    return (
        <div className='flex justify-center items-end gap-0'>
            <Link to={`detail-product/${id}`}>
                <TooltipComponent text="Ver detalle">
                    <RemoveRedEyeOutlinedIcon className='cursor-pointer' fontSize='medium' color='success'></RemoveRedEyeOutlinedIcon>

                </TooltipComponent>
            </Link>


            {isFavorite ? (
                <TooltipComponent onClick={toggleFavoriteAction} text="Eliminar de favoritos">

                    <FavoriteOutlinedIcon color='error'></FavoriteOutlinedIcon>
                </TooltipComponent>
            ) : (
                <TooltipComponent onClick={toggleFavoriteAction} text={"Agregar a favoritos"}>

                    <FavoriteBorderOutlinedIcon color='error' className='cursor-pointer'></FavoriteBorderOutlinedIcon>
                </TooltipComponent>

            )
            }

        </div>
    )
}

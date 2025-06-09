import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function TooltipComponent({ children, text, onClick }) {
    return (
        <Tooltip title={text || "Eliminar"}>
            <IconButton onClick={onClick}>
                {children || <DeleteIcon />}
            </IconButton>
        </Tooltip>
    );
}

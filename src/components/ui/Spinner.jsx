
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function SpinnerComponent({ open }) {
    return (

        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">

            {open && <CircularProgress color="success" />}


        </Stack>


    );
}

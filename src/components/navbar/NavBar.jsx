import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useActiveRoute } from '../../hooks/useActiveRoute';
import TooltipComponent from '../ui/Tooltip';
import { logoutUser } from '../../store/auth';
import { useDispatch } from 'react-redux';

const pages = [
    { label: 'Home', path: '/shop' },
    { label: 'Favoritos', path: '/shop/favorites' },
    { label: 'Nuevo producto', path: '/shop/create-product' },
];

export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const isActive = useActiveRoute();
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = () => {

        dispatch(logoutUser());
        navigate('/auth/login', { replace: true });
    }

    return (
        <AppBar color="success" position="sticky" elevation={4}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingY: 1 }}>
                    {/* Mobile Icon */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>

                        <img
                            onClick={() => navigate('/shop')}
                            src="https://www.revistaeyn.com/binrepository/1084x750/43c0/1000d750/none/26086/VVMA/moda-ropausada-americana-2023_5809344_20231018143322.jpg"
                            alt="CHANGO MAS"
                            className="rounded-full cursor-pointer  absolute right-0 w-[46px] h-[46px] shadow-md hover:scale-105 transition"
                        />


                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiPaper-root': {
                                    borderRadius: 2,
                                    boxShadow: 4,
                                    minWidth: 180,
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.path}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={page.path}
                                    sx={{
                                        gap: 1,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            bgcolor: theme.palette.success.light,
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <Typography textAlign="center" fontWeight={500}>
                                        {page.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem
                                onClick={handleLogout}
                                component={Link}

                                sx={{
                                    gap: 1,
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        bgcolor: theme.palette.success.light,
                                        color: 'white',
                                    },
                                }}>

                                <LogoutIcon sx={{ color: 'black', cursor: 'pointer' }} />
                                <Typography textAlign="center" fontWeight={500}>
                                    Cerrar sesión
                                </Typography>

                            </MenuItem>

                        </Menu>

                    </Box>

                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <img
                            onClick={() => navigate('/shop')}
                            src="https://www.revistaeyn.com/binrepository/1084x750/43c0/1000d750/none/26086/VVMA/moda-ropausada-americana-2023_5809344_20231018143322.jpg"
                            alt="CHANGO MAS"
                            className="rounded-full cursor-pointer hidden md:block w-[70px] h-[70px] shadow-md hover:scale-105 transition"
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', md: 'block' }, fontWeight: 'bold', letterSpacing: 1 }}
                        >
                            MI TIENDA
                        </Typography>
                    </Box>

                    {/* Desktop Links */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 3 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.path}
                                component={Link}
                                to={page.path}
                                color={isActive(page.path, true) ? 'primary' : 'inherit'}
                                variant={isActive(page.path, true) ? 'contained' : 'text'}
                                sx={{
                                    mx: 1,
                                    borderRadius: '20px',
                                    fontWeight: 500,
                                    textTransform: 'none',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        bgcolor: isActive(page.path)
                                            ? 'primary.dark'
                                            : theme.palette.success.light,
                                        color: 'white',
                                    },
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Logout Icon (Desktop) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <TooltipComponent onClick={handleLogout} text="Cerrar sesión">
                            <IconButton sx={{ color: 'white', transition: '0.3s', '&:hover': { color: 'red' } }}>
                                <LogoutIcon />
                            </IconButton>
                        </TooltipComponent>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};



// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useActiveRoute } from '../../hooks/useActiveRoute';
// import LogoutIcon from '@mui/icons-material/Logout';
// import TooltipComponent from '../ui/Tooltip';



// const pages = [{ label: 'Home', path: "/home" }, { label: 'favoritos', path: "/favorites" }, { label: 'Nuevo producto', path: "/create-product" }];


// export const NavBar = () => {
//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const navigate = useNavigate();
//     // verificar si la ruta es activa o no
//     const isActive = useActiveRoute();



//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };



//     return (
//         <AppBar color='success' position="sticky">
//             <Container maxWidth="2xl">
//                 <Toolbar disableGutters>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{ display: { xs: 'block', md: 'none' } }}
//                         >
//                             {pages.map((page) => (
//                                 <Link key={page.path} to={page.path} className='flex flex-col items-center justify-center'>
//                                     <MenuItem onClick={handleCloseNavMenu}>
//                                         <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
//                                     </MenuItem>
//                                 </Link>
//                             ))}
//                             <MenuItem>
//                                 <TooltipComponent text={"Cerrar sesión"}>
//                                     <LogoutIcon sx={{color:"black"}}></LogoutIcon>
//                                 </TooltipComponent>
//                             </MenuItem>

//                         </Menu>
//                     </Box>
//                     <div>

//                     </div>
//                     <img onClick={() => navigate("/home")} className='rounded-full cursor-pointer hidden md:block md:w-[100px]  md:h-[90px]   p-2' src="https://www.revistaeyn.com/binrepository/1084x750/43c0/1000d750/none/26086/VVMA/moda-ropausada-americana-2023_5809344_20231018143322.jpg" alt="CHANGO MAS" />
//                     <div className='hidden   md:flex w-1/2 justify-start'>
//                         {pages.map((page) => (
//                             <Link key={page.path} to={page.path}>
//                                 <Button
//                                     variant={isActive(page.path) ? 'contained' : 'contained'}
//                                     size="small"
//                                     color={isActive(page.path) ? 'primary' : 'success'}

//                                     sx={{ my: 2, mx: 1, fontWeight: 500, color: 'white', display: 'block' }}
//                                 >
//                                     {page.label}
//                                 </Button>
//                             </Link>
//                         ))}

//                     </div>
//                     <div className='hidden  w-1/2 lg:flex justify-end'>
//                         <TooltipComponent text={"Cerrar sesión"}>
//                             <LogoutIcon></LogoutIcon>
//                         </TooltipComponent>

//                     </div>
//                     <Box sx={{ flexGrow: 0 }}>
//                         <img onClick={() => navigate("/home")} className='rounded-full cursor-pointer block w-[70px] h-[70px]  md:hidden   p-2' src="https://www.revistaeyn.com/binrepository/1084x750/43c0/1000d750/none/26086/VVMA/moda-ropausada-americana-2023_5809344_20231018143322.jpg" alt="" />
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

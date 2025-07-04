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
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useActiveRoute } from "../../hooks/useActiveRoute";
import TooltipComponent from "../ui/Tooltip";
import { logoutUser } from "../../store/auth";
import { useDispatch } from "react-redux";
import icono from "../../assets/icono.jpg";

const ACCENT = "#DF1074"; // rosa del logo
const DARK_TXT = "#333333";
const LIGHT_BG = "#FFE6F0";

const pages = [
  { label: "Home", path: "/shop" },
  { label: "Favoritos", path: "/shop/favorites" },
  { label: "Nuevo producto", path: "/shop/create-product" },
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isActive = useActiveRoute();
  const theme = useTheme();

  /* Handlers */
  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth/login", { replace: true });
  };

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        bgcolor: LIGHT_BG,
        color: DARK_TXT,
        borderBottom: `3px solid ${ACCENT}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* ——————— Logo & Burger (mobile) ——————— */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            {/* Logo mini */}
            <Box
              component="img"
              src={icono}
              alt="logo"
              onClick={() => navigate("/shop")}
              sx={{
                width: 44,
                height: 44,
                ml: 1,
                borderRadius: "50%",
                cursor: "pointer",
                transition: "transform .25s",
                "&:hover": { transform: "scale(1.08)" },
              }}
            />

            {/* ———— Drawer‑like Menu (xs‑sm) ———— */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  mt: 1,
                  px: 1,
                  borderRadius: 2,
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              {pages.map(({ label, path }) => (
                <MenuItem
                  key={path}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={path}
                  sx={{
                    borderRadius: 1,
                    "&:hover": { bgcolor: alpha(ACCENT, 0.1) },
                  }}
                >
                  <Typography fontWeight={500}>{label}</Typography>
                </MenuItem>
              ))}

              <MenuItem onClick={handleLogout} sx={{ borderRadius: 1 }}>
                <LogoutIcon sx={{ mr: 1 }} />
                <Typography fontWeight={500}>Cerrar sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* ——————— Logo & Brand (md‑xl) ——————— */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src={icono}
              alt="logo"
              onClick={() => navigate("/shop")}
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                cursor: "pointer",
                display: { xs: "none", md: "block" },
                transition: "transform .25s",
                "&:hover": { transform: "scale(1.08)" },
              }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              letterSpacing={1}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              FASHIONISTA
            </Typography>
          </Box>

          {/* ——————— Links desktop ——————— */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, ml: 4 }}>
            {pages.map(({ label, path }) => {
              const active = isActive(path, true);
              return (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  size="large"
                  disableElevation
                  variant={active ? "contained" : "text"}
                  sx={{
                    mx: 1,
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: 500,
                    bgcolor: active ? ACCENT : "transparent",
                    color: active ? "#fff" : DARK_TXT,
                    "&:hover": {
                      bgcolor: active
                        ? theme.palette.primary.dark
                        : alpha(ACCENT, 0.12),
                    },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          {/* ——————— Logout (desktop) ——————— */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <TooltipComponent text="Cerrar sesión" onClick={handleLogout}>
              <IconButton sx={{ "&:hover": { color: ACCENT } }}>
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

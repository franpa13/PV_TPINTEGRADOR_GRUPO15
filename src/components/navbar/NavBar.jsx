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
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useActiveRoute } from "../../hooks/useActiveRoute";
import TooltipComponent from "../ui/Tooltip";
import { logoutUser } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
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
  const name = useSelector((state) => state.auth.currentUser);

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
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", width: "100%", borderRadius: 1, p: 0.5, justifyContent: "space-between" }}
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
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              <Typography sx={{ bgcolor: "#e4559b", color: 'white', borderRadius: '5%', p: 0.5, ml: 1 }}>{name.userName}</Typography>
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
          <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
            <Typography sx={{ bgcolor: "#e4559b", color: 'white', borderRadius: '15%', p: 0.5, ml: 0.5 }}>{name.userName}</Typography>
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


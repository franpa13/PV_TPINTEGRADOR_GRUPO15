import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Rating, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { ImageMagnifier } from "./ImageMagnifier";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { removeProduct } from "../../store/productsSlice";
import { Error } from "../../components/ui/Error";
import { useState } from "react";

export const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );


const [isDeleted, setIsDeleted] = useState(false);

const deleteProd = () => {
  dispatch(removeProduct(product));
  setIsDeleted(true);
  navigate("/shop");
};

if (!product && !isDeleted) {
  return <Error message="No se encontró el producto!" />;
}

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        py: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={4} direction="column">
          {/* Botones */}
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                startIcon={<ArrowBack />}
                onClick={() => navigate(-1)}
                size="small"
              >
                Volver
              </Button>
              <Button
                variant="contained"
                color="error"
                endIcon={<DeleteOutlineOutlinedIcon />}
                onClick={deleteProd}
                size="small"
              >
                Eliminar
              </Button>
            </Box>
          </Grid>

          <Grid container spacing={4} direction={{ xs: "column", md: "row" }}>
            <Grid sx={{ width: "100%" }} item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 400,

                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <ImageMagnifier
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  zoom={2}
                />
              </Box>
            </Grid>

            {/* Detalles */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {product.title}
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Rating
                  name="read-only"
                  value={product.rating.rate}
                  precision={0.1}
                  readOnly
                />
                <Typography variant="body2" color="text.secondary">
                  {product.rating.rate} / 5
                </Typography>
              </Box>

              <Typography variant="h5" color="primary" gutterBottom>
                $ {product.price}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                {product.description}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ fontStyle: "italic", color: "blue" }}
              >
                Categoría: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock: {product.rating.count} unidades
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

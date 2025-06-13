import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProduct } from "../../store/productsSlice";
import { Title } from "../../components/ui/Title.jsx";
import Input from "../../components/ui/Input";
import Selector from "../../components/ui/Selector.jsx";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { Box, Grid, Button, Container } from "@mui/material";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";

const categoriasDisponibles = [
  { value: "men's clothing", label: "Hombre" },
  { value: "women's clothing", label: "Mujer" },
  { value: "jewelery", label: "Joyas" },
  { value: "electronics", label: "Electrónicos" },
  { value: "other", label: "Otros" },
];

export const EditProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProducts = useSelector((state) => state.products); // productos es un array directo
  const [formData, setFormData] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  useEffect(() => {
    if (id && allProducts.length > 0) {
      const producto = allProducts.find((p) => p.id === parseInt(id));
      if (producto) {
        setFormData({
          id: producto.id,
          title: producto.title,
          price: producto.price,
          description: producto.description,
          category: producto.category,
          image: producto.image,
          rating: {
            rate: producto.rating?.rate || 0,
            count: producto.rating?.count || 0,
          },
        });
      }
    }
  }, [id, allProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setFormData((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: parseFloat(value),
        },
      }));
    } else if (name === "price") {
      setFormData((prev) => ({
        ...prev,
        [name]: parseFloat(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason !== "clickaway") setOpenSnackbar(false);
  };
  if (!formData) {
    return <div>Cargando producto...</div>;
  }

  return (
    <>
      <Container maxWidth="sm">
        <Title>
          <EditNoteSharpIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Editar Producto
        </Title>
        <Box sx={{ my: 4, pb: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Input
                id="title"
                name="title"
                label="Nombre del Producto"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <Input
                id="price"
                name="price"
                label="Precio"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <Selector
                id="category"
                name="category"
                label="Categoría"
                value={formData.category}
                onChange={handleChange}
                options={categoriasDisponibles}
              />
              <Input
                id="description"
                name="description"
                label="Descripción"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
              />
              <Input
                id="image"
                name="image"
                label="URL de la imagen"
                value={formData.image}
                onChange={handleChange}
                required
              />
              <Input
                id="rate"
                name="rate"
                label="Puntuación"
                type="number"
                step="0.1"
                value={formData.rating?.rate}
                onChange={handleChange}
              />
              <Input
                id="count"
                name="count"
                label="Cantidad de Reseñas"
                type="number"
                value={formData.rating?.count}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary">
                Guardar Cambios
              </Button>
            </Grid>
          </form>
        </Box>
        <SnackbarComponent
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          message="Producto actualizado con éxito"
          severity="success"
          vertical="bottom"
          horizontal="center"
        />
      </Container>
    </>
  );
};

export default EditProduct;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Box } from "@mui/material";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { addProduct, productsSlice } from "../../store/productsSlice.js";
import { Title } from "../../components/ui/Title.jsx";
import Input from "../../components/ui/Input";
import { categoriasDisponibles } from "../../utils/categories.js";
import Selector from "../../components/ui/Selector.jsx";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import CustomCard from "../../components/ui/Card/CustomCard.jsx";
export const CreateProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Date.now(),
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setFormData({
        ...formData,
        rating: {
          ...formData.rating,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title !== "" &&
      formData.price !== "" &&
      formData.description !== "" &&
      formData.category !== "" &&
      formData.image !== "" &&
      formData.rating.rate !== "" &&
      formData.rating.count !== ""
    ) {
      dispatch(addProduct(formData));
      setFormData({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: { rate: "", count: "" },
      });
      setOpenSnackbar(true);
    } else {
      setOpenSnackbarError(true);
    }
  };
  const handleCloseSnackbarError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarError(false);
  };

  return (
    <CustomCard>
      <Title
        className="text-2xl xl:text-3xl text-center text-green-700 my-5"
        text="Agregar Producto"
      >
        <FileUploadSharpIcon fontSize="large" />
      </Title>

      <Box sx={{ my: 4, pb: 4, flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}></Grid>
          <Input
            id="product-title"
            name="title"
            label="Nombre del Producto"
            value={formData.title}
            onChange={handleChange}
            required
            type="text"
          />
          <Input
            id="product-price"
            label="Precio"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <Selector
            id="product-category"
            label="Categoría"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={categoriasDisponibles}
          />
          <Input
            id="product-description"
            label="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            variant="outlined"
          />
          <Input
            id="product-image"
            label="URL de la Imagen"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <Input
            id="product-rating-rate"
            label="Puntuación"
            name="rate"
            type="number"
            value={formData.rating.rate}
            onChange={handleChange}
            step="0.1"
            variant="outlined"
            inputProps={{
              min: 0,
              max: 5,
            }}
          />
          <Input
            label="Cantidad de Reseñas"
            name="count"
            type="number"
            value={formData.rating.count}
            onChange={handleChange}
            variant="outlined"
          />
          <Grid item xs={12} sx={{ mb: 4 }}></Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
          >
            Crear Producto
          </Button>
        </form>
      </Box>
      <SnackbarComponent
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Producto creado con éxito"}
        severity="success"
        vertical="bottom"
        horizontal="center"
      />
      <SnackbarComponent
        open={openSnackbarError}
        onClose={handleCloseSnackbarError}
        message={"Formulario incompleto, por favor completa todos los campos."}
        severity="warning"
        vertical="bottom"
        horizontal="center"
      />
    </CustomCard>
  );
};

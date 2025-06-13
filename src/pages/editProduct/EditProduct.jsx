import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { updateProduct } from "../../store/productsSlice.js";
import { Title } from "../../components/ui/Title.jsx";
import Input from "../../components/ui/Input";
import { Grid } from "@mui/material";
import Selector from "../../components/ui/Selector.jsx";
import CustomButton from "../../components/ui/CustomButton.jsx";

export const EditProduct = () => {
  // const [openSnackbar, setOpenSnackbar] = useState(false);
  // const products = useSelector((state) => state.products)
  // const dispatch = useDispatch();
  // const { id } = useParams();
 

  // const [productToEdit, setProductToEdit] = useState(null);
  // const categoriasDisponibles = [
  //   { value: "men's clothing", label: "Hombre" },
  //   { value: "women's clothing", label: "Mujer" },
  //   { value: "jewelery", label: "Joyas" },
  //   { value: "electronics", label: "Electronicos" },
  //   { value: "other", label: "Otros" },
  // ];

  // useEffect(() => {
  //   if (id && products?.length > 0) {
  //     const foundProduct = products.find(
  //       (product) => product.id === parseInt(id)
  //     );

  //     if (foundProduct) {
  //       setProductToEdit(foundProduct);
  //       setFormData(foundProduct);
  //     }
  //   }
  // }, [id, products]);

  // const handleCloseSnackbar = () => {
  //   setOpenSnackbar(false);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateProduct(formData));
  //   setOpenSnackbar(true);
  // };

  return (
    <>
      {/* <Title> Edición de Producto: {productToEdit?.title}</Title>{" "}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}></Grid>
        <Input
          id="product-title"
          name="title"
          label="Nombre del Producto"
          value={productToEdit?.title || ""}
          onChange={handleChange}
          required
        />
        <Input
          id="product-price"
          label="Precio"
          name="price"
          type="number"
          value={productToEdit?.price || ""}
          onChange={handleChange}
          required
        />
        <Selector
          id="product-category"
          label="Categoría"
          name="category"
          value={productToEdit?.category || ""}
          onChange={handleChange}
          options={categoriasDisponibles}
        />
        <Input
          id="product-description"
          label="Descripción"
          name="description"
          value={productToEdit?.description || ""}
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
          value={productToEdit?.image || ""}
          onChange={handleChange}
          required
          variant="outlined"
        />
        <Input
          id="product-rating-rate"
          label="Puntuación"
          name="rate"
          type="number"
          value={productToEdit?.rating.rate || ""}
          onChange={handleChange}
          step="0.1"
          variant="outlined"
        />
        <Input
          label="Reseñas"
          name="count"
          type="number"
          value={productToEdit?.rating.count}
          onChange={handleChange}
          variant="outlined"
        />
        <Grid item xs={12} sx={{ mb: 4 }}></Grid>
        <CustomButton onClick={handleSubmit}>Editar</CustomButton>
      </form>
      <SnackbarComponent
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Producto modificado con éxito"}
        severity="success"
        vertical="bottom"
        horizontal="center"
      /> */}
      <h2>edit</h2>
    </>
  );
};

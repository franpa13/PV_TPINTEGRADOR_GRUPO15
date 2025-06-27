import { useState, useEffect } from "react";
import { Stack, Box, Grid, Button, TextField } from "@mui/material";
import Selector from "../../components/ui/Selector.jsx";
import Input from "../../components/ui/Input";
const EMPTY_RATING = { rate: "", count: "" };
import { categoriasDisponibles } from "../../utils/categories.js";

export default function FormsProduct({
  formData,
  handleChange,
  handleSubmit,
  submitLabel = "Crear Producto",
}) {
  // Garantizamos que rating exista siempre
  const safeData = {
    ...formData,
    rating: formData?.rating ?? EMPTY_RATING,
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ my: 4, pb: 4, width: "80%", maxWidth: 600, mx: "auto" }}
    >
      <Grid container spacing={3} direction="column">
        <Grid item xs={12} s={12}>
          <TextField
            id="product-title"
            name="title"
            label="Nombre del Producto"
            value={safeData.title}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="product-price"
            name="price"
            label="Precio"
            type="number"
            inputProps={{ step: "0.01", min: 0 }}
            value={safeData.price}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Selector
            id="product-category"
            name="category"
            label="Categoría"
            value={safeData.category}
            options={categoriasDisponibles}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="product-description"
            name="description"
            label="Descripción"
            value={safeData.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="product-image"
            name="image"
            label="URL de la Imagen"
            type="url"
            value={safeData.image}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="product-rating-rate"
            name="rate"
            label="Puntuación"
            type="number"
            inputProps={{ min: 0, max: 5, step: 0.1 }}
            value={safeData.rating.rate}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="product-rating-count"
            name="count"
            label="Cantidad de Reseñas"
            type="number"
            value={safeData.rating.count}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {submitLabel}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

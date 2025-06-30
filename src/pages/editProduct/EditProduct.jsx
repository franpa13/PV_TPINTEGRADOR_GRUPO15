import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProduct } from "../../store/productsSlice";
import { Title } from "../../components/ui/Title.jsx";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { Box, Grid, Button, Container } from "@mui/material";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import { ArrowBack } from "@mui/icons-material";
import CustomCard from "../../components/ui/Card/CustomCard.jsx";
import FormsProduct from "../../components/forms/FormsProduct.jsx";

export const EditProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProducts = useSelector((state) => state.products); // productos es un array directo
  const [formData, setFormData] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
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
          favorite: producto.favorite || false,
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
        [name]: value,
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
      <CustomCard>
        <Title
          className="text-2xl xl:text-3xl text-center text-green-700 my-5"
          text="Editar Producto"
        >
          <EditNoteSharpIcon fontSize="large" />
        </Title>
        <div className="flex w-full justify-start">
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
            size="small"
          >
            Volver
          </Button>
        </div>
        <FormsProduct
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitLabel="Editar producto"
        />
        <SnackbarComponent
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          message="Producto actualizado con éxito"
          severity="success"
          vertical="bottom"
          horizontal="center"
        />
      </CustomCard>
    </>
  );
};

export default EditProduct;

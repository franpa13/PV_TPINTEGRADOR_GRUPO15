import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { addProduct } from "../../store/productsSlice.js";
import { Title } from "../../components/ui/Title.jsx";
import { ArrowBack } from "@mui/icons-material";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import CustomCard from "../../components/ui/Card/CustomCard.jsx";
import FormsProduct from "../../components/forms/FormsProduct.jsx";

export const CreateProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      setTimeout(() => {
        navigate("/home");
      }, 2000);
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
        submitLabel="Crear Producto"
      ></FormsProduct>

      <SnackbarComponent
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Producto creado con éxito, se lo redigira a la lista de productos"}
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
export default CreateProduct;

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar.jsx";
import { updateProduct } from "../../store/productsSlice.js";
import { Title } from "../../components/ui/Title.jsx";
export const EditProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch();
  const { id } = useParams();
 

  const [productToEdit, setProductToEdit] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
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

  useEffect(() => {
    if (id && products?.length > 0) {
      const foundProduct = products.find(
        (product) => product.id === parseInt(id)
      );

      if (foundProduct) {
        setProductToEdit(foundProduct);
        setFormData(foundProduct);
      }
    }
  }, [id, products]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
    setOpenSnackbar(true);
  };

  if (!productToEdit) {
    return <div>Cargando producto o producto no encontrado...</div>;
  }

  return (
    <>
      <Title> Edición de Producto: {productToEdit?.name}</Title>{" "}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.title || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Categoría:
          <input
            type="text"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Imagen URL:
          <input
            type="text"
            name="image"
            value={formData.image || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Puedes añadir más campos del formulario aquí */}
        <button type="submit">Guardar Cambios</button>
      </form>
      <SnackbarComponent
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Producto modificado con éxito"}
        severity="success"
        vertical="bottom"
        horizontal="center"
      />
    </>
  );
};

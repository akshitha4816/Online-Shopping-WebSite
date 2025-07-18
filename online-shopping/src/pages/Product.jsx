import GetAllCategories from "../productComponent/GetAllCategories";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../productComponent/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Product = () => {
  const { productId, categoryId } = useParams();
  let user = JSON.parse(sessionStorage.getItem("active-user"));
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    quantity: "",
    price: "",
    imageName: "",
    category: { id: "", title: "" },
  });

  const retrieveProduct = async () => {
    const response = await axios.get(
      "http://localhost:8091/api/product/id?productId=" + productId
    );
    return response.data;
  };

  useEffect(() => {
    const getProduct = async () => {
      const retrievedProduct = await retrieveProduct();
      setProduct(retrievedProduct);
    };
    const getProductsByCategory = async () => {
      const allProducts = await retrieveProductsByCategory();
      if (allProducts) {
        setProducts(allProducts);
      }
    };
    getProduct();
    getProductsByCategory();
  }, [productId]);

  const retrieveProductsByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8091/api/product/category?categoryId=" + categoryId
    );
    return response.data;
  };

  const saveProductToCart = (userId) => {
    fetch("http://localhost:8091/api/user/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        userId: userId,
        productId: productId,
      }),
    }).then((result) => {
      toast.success("Products added to Cart Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      result.json().then((res) => {});
    });
  };

  const addToCart = (e) => {
    if (user == null) {
      alert("Please login to buy the products!!!");
      e.preventDefault();
    } else {
      saveProductToCart(user.id);
      setQuantity("");
      e.preventDefault();
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <GetAllCategories />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              image={`http://localhost:8091/api/product/${product.imageName}`}
              alt={product.title}
              sx={{ maxHeight: 400, objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                {product.title}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Description:
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {product.description}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                Price: ₹{product.price}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                Stock: {product.quantity}
              </Typography>
              <Box component="form" onSubmit={addToCart} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  placeholder="Enter Quantity..."
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  required
                  style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: 120 }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Add to Cart
                </Button>
                <ToastContainer />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Related Products:
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard item={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Product;

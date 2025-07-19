import Carousel from "./Carousel";
import GetAllCategories from "../productComponent/GetAllCategories";
import ProductCard from "../productComponent/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveAllProducts();
      if (allProducts) {
        setProducts(allProducts);
      }
    };

    const getProductsByCategory = async () => {
      const allProducts = await retrieveProductsByCategory();
      if (allProducts) {
        setProducts(allProducts);
      }
    };

    if (categoryId == null) {
      getAllProducts();
    } else {
      getProductsByCategory();
    }
  }, [categoryId]);

  const retrieveAllProducts = async () => {
    const response = await axios.get("http://localhost:8091/api/product/all");
    return response.data;
  };

  const retrieveProductsByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8091/api/product/category?categoryId=" + categoryId
    );
    return response.data;
  };

  return (
    <Container maxWidth="xl" sx={{ mb: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Carousel />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <GetAllCategories />
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard item={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;

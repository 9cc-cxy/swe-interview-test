
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Container,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
      setProducts(res.data);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  if (loading) return <Typography align="center">Loading...</Typography>;
  if (error) return <Typography color="error" align="center">{error}</Typography>;

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <Typography variant="h3" align="center" fontWeight={700} mt={4} mb={4}>
        Simple Card List
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345, margin: 'auto', position: 'relative' }}>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(product.id)}
                sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1, color: 'red' }}
              >
                <DeleteIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="160"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
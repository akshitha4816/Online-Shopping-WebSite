
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 'auto', boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={`http://localhost:8091/api/product/${item.imageName}`}
        alt={item.title}
        sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48 }}>
          {item.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 1, fontWeight: 'bold' }}>
          ₹{item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/product/${item.id}/${item.category.id}`}
          size="small"
          variant="contained"
          color="primary"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

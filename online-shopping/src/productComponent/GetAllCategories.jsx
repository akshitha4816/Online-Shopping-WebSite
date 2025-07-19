import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8091/api/category/all').then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Categories
      </Typography>
      <List>
        {categories.map((cat) => (
          <ListItem key={cat.id} disablePadding>
            <ListItemButton component={Link} to={`/category/${cat.id}`}>
              <ListItemText primary={cat.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default GetAllCategories;

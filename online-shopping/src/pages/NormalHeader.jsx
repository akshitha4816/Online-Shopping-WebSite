import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button component={Link} to="/user/register" color="inherit" variant="outlined">
        Register User
      </Button>
      <Button component={Link} to="/user/login" color="inherit" variant="contained">
        Login User
      </Button>
    </Box>
  );
};

export default NormalHeader;

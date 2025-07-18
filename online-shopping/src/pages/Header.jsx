import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/kart.png";

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img src={logo} width="35" height="35" alt="Total Mart Logo" style={{ marginRight: 8 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold', fontStyle: 'italic' }}
          >
            Total Mart
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button component={Link} to="/about" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact Us
          </Button>
        </Box>
        <Box>
          <RoleNav />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

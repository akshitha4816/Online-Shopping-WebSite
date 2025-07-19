import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderUser = () => {
  let navigate = useNavigate();

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-user");
    window.location.reload(true);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button component={Link} to="/user/mycart" color="inherit" variant="outlined">
        My Cart
      </Button>
      <Button component={Link} to="/user/myorder" color="inherit" variant="outlined">
        My Order
      </Button>
      <Button color="secondary" variant="contained" onClick={userLogout}>
        Logout
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default HeaderUser;

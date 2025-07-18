import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryPersonHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-delivery"));
  console.log(user);

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
    sessionStorage.removeItem("active-delivery");
    window.location.reload(true);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button component={Link} to="/user/delivery/myorders" color="inherit" variant="outlined">
        My Deliveries
      </Button>
      <Button component={Link} to="/user/admin/searchOrder" color="inherit" variant="outlined">
        Update Order Delivery
      </Button>
      <Button color="secondary" variant="contained" onClick={userLogout}>
        Logout
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default DeliveryPersonHeader;

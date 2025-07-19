import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button component={Link} to="/addcategory" color="inherit" variant="outlined">
        Add Category
      </Button>
      <Button component={Link} to="/addproduct" color="inherit" variant="outlined">
        Add Product
      </Button>
      <Button component={Link} to="/user/admin/allorder" color="inherit" variant="outlined">
        All Orders
      </Button>
      <Button component={Link} to="/user/admin/assigndelivery" color="inherit" variant="outlined">
        Assign Order Delivery
      </Button>
      <Button color="secondary" variant="contained" onClick={adminLogout}>
        Logout
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default AdminHeader;

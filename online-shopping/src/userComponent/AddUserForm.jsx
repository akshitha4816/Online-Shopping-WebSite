import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const AddUserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:8091/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      toast.success("Registered Successfully!!!", {
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

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardHeader
          title={<Typography variant="h5" align="center">Add User</Typography>}
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
        />
        <CardContent>
          <form onSubmit={saveUser}>
            <FormControl fullWidth margin="normal">
              <InputLabel>User Role</InputLabel>
              <Select
                name="role"
                value={user.role}
                label="User Role"
                onChange={handleUserInput}
                required
              >
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Delivery">Delivery Person</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email Id"
              name="emailId"
              value={user.emailId}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              type="email"
            />
            <TextField
              label="Password"
              name="password"
              value={user.password}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              type="password"
            />
            <TextField
              label="Mobile No"
              name="phoneNo"
              value={user.phoneNo}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              type="number"
            />
            <TextField
              label="Street"
              name="street"
              value={user.street}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              multiline
              rows={2}
            />
            <TextField
              label="City"
              name="city"
              value={user.city}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Pincode"
              name="pincode"
              value={user.pincode}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              type="number"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register User
            </Button>
            <ToastContainer />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddUserForm;

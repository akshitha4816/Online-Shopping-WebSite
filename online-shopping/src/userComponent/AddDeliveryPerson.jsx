import { useState } from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AddDeliveryPerson = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8091/api/user/deliveryperson/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((res) => {});
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardHeader
          title={<Typography variant="h5" align="center">Add Delivery Person</Typography>}
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
        />
        <CardContent>
          <form onSubmit={saveUser}>
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
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddDeliveryPerson;

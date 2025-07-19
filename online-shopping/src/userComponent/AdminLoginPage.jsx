import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:8091/api/user/admin/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      result.json().then((res) => {
        sessionStorage.setItem("active-admin", JSON.stringify(res));
        toast.success("logged in successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/home");
        window.location.reload(true);
      });
    });
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardHeader
          title={<Typography variant="h5" align="center">Admin Login</Typography>}
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
        />
        <CardContent>
          <form onSubmit={loginAction}>
            <TextField
              label="Email Id"
              name="emailId"
              value={loginRequest.emailId}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              type="email"
            />
            <TextField
              label="Password"
              name="password"
              value={loginRequest.password}
              onChange={handleUserInput}
              fullWidth
              required
              margin="normal"
              type="password"
              autoComplete="on"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            <ToastContainer />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminLoginPage;

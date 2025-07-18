import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AddCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  const priceToPay = location.state.priceToPay;

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    validThrough: "",
    cvv: "",
  });

  const handleCardInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const payAndOrder = () => {
    fetch("http://localhost:8091/api/user/order?userId=" + user.id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((res) => {});
    });
  };

  const payForOrder = (e) => {
    e.preventDefault();
    payAndOrder();
    toast.success("Products Ordered Sucessfully!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/home");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardHeader
          title={<Typography variant="h5" align="center">Payment Details</Typography>}
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
        />
        <CardContent>
          <form onSubmit={payForOrder}>
            <TextField
              label="Name on Card"
              name="cardName"
              value={card.cardName}
              onChange={handleCardInput}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Card Number"
              name="cardNumber"
              value={card.cardNumber}
              onChange={handleCardInput}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Valid Through"
              name="validThrough"
              value={card.validThrough}
              onChange={handleCardInput}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="CVV"
              name="cvv"
              value={card.cvv}
              onChange={handleCardInput}
              fullWidth
              required
              margin="normal"
              type="password"
              inputProps={{ maxLength: 4 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Pay Rs {priceToPay}
            </Button>
            <ToastContainer />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddCardDetails;

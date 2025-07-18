import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ContactUs = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Contact Us
        </Typography>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          We are here for you!
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Contact us at <b>mail@totalmart.com</b>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactUs;

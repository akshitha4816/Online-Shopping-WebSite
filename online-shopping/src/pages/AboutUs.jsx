import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.7 }}>
          Online shopping is a process whereby consumers directly buy goods, services etc. from a seller without an intermediary service over the Internet. Shoppers can visit web stores from the comfort of their house and shop as by sitting in front of the computer. Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.
          <br /><br />
          In existing system shopping can done in a manual way, the customer has to go for shopping, and then he is having the possibility to choose the products what ever he wants. Selling online also has its advantages when it comes to convincing customers you're the best in the industry. Your website can inform customers about your sales, the quality of your products, and why they should buy from you. You can also show customer reviews, so people know they're buying from a reputable brand. Doing business electronically describes e‐commerce. E-commerce (EC), an abbreviation for electronic commerce, is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.
          <br /><br />
          The online shopping system is fast gaining media for to sale or purchase items from anywhere and anytime. It is basically based on Internet, It is related with B2C (Business to Customer) model and status of the design and development of e-commerce platform. E-business or Online business means business transactions that take place online with the help of the internet. The term e-business came into existence in the year 1996. E-business is an abbreviation for electronic business. Therefore, the buyer and the seller do not meet personally. E-commerce is directly link to your business promotions, as it is the age of digital media. Making your business available online is crucial to your business development such as, highly convenience, wide exposure, global customer, easy to run, etc.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;

import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { red } from '@mui/material/colors';

const HeroSection = () => {

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, backgroundColor:'burlywood', width:'30rem', marginLeft: {sm:20,md:30,lg:45 }, borderRadius:'3%', color:'brown', fontFamily:'cursive' }} >
        Welcome to our Coffee Shop!
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2, color:'brown', fontSize:'20px', fontFamily:'cursive', fontWeight:'bold', borderBottom:'5px solid', borderRadius:'20px', width:'30rem', marginLeft: {sm:20,md:30,lg:45 } }}>
        Discover the finest coffee blends in town.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 8, backgroundColor:'burlywood', color:'brown', fontWeight:'bold', fontSize:'15px' }}>
        Order Now
      </Button>
    </Container>
  )
};

export default HeroSection;

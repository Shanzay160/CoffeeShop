import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 8, backgroundColor:'brown', color:'burlywood', fontSize:'2rem', width:'20%', border:'10px solid burlywood', opacity:'0.9', marginLeft: {sm:20, md:40,lg:60 }  }}>
        About Us
      </Typography>
  <Typography variant="body1" sx={{ mt: 2, width:{sm:300, md:500, lg:1000}, color:'maroon', border:'5px solid burlywood', backgroundColor:'wheat', textAlign:'justify',  marginLeft: {sm:20,  md:10,lg:20 } }}>
      Welcome to our cozy Coffee Shop, where the aroma of freshly brewed coffee fills the air and invites you to indulge in delightful moments. Here, we take pride in crafting the finest coffee blends sourced from the best regions around the world. Each cup is carefully prepared by our skilled baristas, ensuring a rich and flavorful experience in every sip.<br/><br/>
      Sit back, relax, and enjoy the warm ambiance of our coffee shop. Our friendly staff is always ready to provide a warm welcome and personalized recommendations to make your visit truly memorable. Whether you're seeking a moment of solitude with a good book or catching up with friends over steaming cups of coffee, our space is perfect for fostering connections and creating cherished memories.
      </Typography>
    </Container>
  );
};

export default AboutSection;

import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container sx={{ mt: 4, textAlign: 'center', pb: 2 }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
      </Typography>
      {/* Add social links/icons here */}
    </Container>
  );
};

export default Footer;

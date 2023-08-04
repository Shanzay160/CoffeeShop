import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactSection = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Contact Us
      </Typography>
      <form sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email"/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactSection;

import React from 'react';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Header = () => {

// const navspace ={
//   position:'relative',
//   left:'700px',
// }

  return (
    <AppBar position="sticky">
      <Toolbar className='text-xl bg-[#691717]'>
        <Typography variant="h6" component="div" fontFamily='cursive'>
          Coffee Shop
        </Typography>

        {/* <div className='flex flex-row max-w-auto lg:ml-[50rem] md:ml-[20rem] sm:ml-[10rem] responsive'> */}
        <Box sx={{ marginLeft: {sm:40,md:60,lg:100 } }}>
        <Button color="inherit" sx={{'&:hover': {backgroundColor: 'burlywood',color: 'white',},}}
 //component={Link} to="/" 
        >
          Home
        </Button>
        </Box>
        <Button color="inherit" sx={{'&:hover': {backgroundColor: 'burlywood',color: 'white',},}} //component={Link} to="/menu"
        >
          Menu
        </Button>
        <Button color="inherit" sx={{'&:hover': {backgroundColor: 'burlywood',color: 'white',},}} //component={Link} to="/about"
        >
          About
        </Button>
        <Button color="inherit" sx={{'&:hover': {backgroundColor: 'burlywood',color: 'white',},}} //component={Link} to="/contact"
        >
          Contact
        </Button>
        {/* </div> */}
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const menuItems = [
  { name: "Espresso", price: "$2.50", style: { backgroundColor: 'burlywood', opacity:'0.9', color: 'brown',width:'10rem', fontWeight:'bold', fontFamily:'cursive'} },
  { name: 'Cappuccino', price: '$3.00', style: { backgroundColor: 'brown', opacity:'0.9', color: 'burlywood', width:'15rem' } },
  { name: 'Latte', price: '$3.50',style: { backgroundColor: 'burlywood', opacity:'0.9', color: 'brown', width:'20rem' } },
  // Add more menu items here
];

const MenuSection = () => {
  return (
    <Container sx={{ }}>
      <Typography variant="h5" sx={{ mt: 8, backgroundColor:'burlywood', color:'brown', width:'10rem', height:'10rem', border:'5px solid brown', borderRadius:'50%',fontFamily:'cursive', fontSize:'2rem', fontWeight:'bold', justifyContent:'center', display:'flex' }}>
        <p className='mt-8'> Our  <br /> Menu</p>
      </Typography>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item, index) => (
         <ListItem key={index} style={item.style} sx={{ '&:hover': { backgroundColor: 'darkbrown', color: 'white' } }}>
          <ListItemText primary={item.name} secondary={item.price} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MenuSection;

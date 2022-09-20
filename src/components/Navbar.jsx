import React from 'react'
import './Navbar.css'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
// import Ylogo from './images/ylogo.jpg'
const Navbar = () =>(
    <Stack direction="row" p={2} alignItems="center" sx={{position:'sticky',background:'black', justifyContent:'space-between'}}>
    <Link to="/" style={{ display:'flex', alignItems:'center'}}>
      <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-15.png" height={45} alt="logo"  />
    </Link>
    <Searchbar/>
    </Stack>
  )

export default Navbar
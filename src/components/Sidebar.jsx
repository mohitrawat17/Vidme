import React from 'react';
import { Stack } from '@mui/material';
import { comps } from '../mui_components/Mui';
import './Sidebar.css'



const selectedCategory='New';

const Sidebar = () => {
  return (
    <Stack direction="row" sx={{overflowY:"auto", height:{sx:'auto', md: '95%'}, flexDirection:{md:'column'} }}>
{
    comps.map((category)=>(
<button className='btns' style={{background: category.name===selectedCategory && 'red', color:'white'}} key={category.name}>
    <span style={{color: category.name=== selectedCategory ? 'white' : 'red' ,marginRight:'15px'}}>{category.icon}</span>
    <span style={{opacity:category.name=== selectedCategory ? '1' : '0.75'}}>{category.name}</span>
</button>
    ))
}
    </Stack>
  )
}

export default Sidebar
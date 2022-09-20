import React from 'react'
import './search.css'
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
const Searchbar = () => {
  return (
    <Paper component="form" onSubmit={()=>{}}
    className="paper"
    sx={{
borderRadius:20,
border:'1px solid e3e3e3',
pl:2
    }}
    >


    <input className='search' placeholder='Search' onChange={()=>{}}/>
    <IconButton type='submit' sx={{p:'8px', color:'red' }}>
    <Search/>
    </IconButton>


    </Paper>
  )
}

export default Searchbar
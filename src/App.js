import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDet from './components/VideoDet';
import ChannelDet from './components/ChannelDet';
import SearchFeed from './components/SearchFeed';


const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:'black'}}>
    <Navbar/>
   <Routes>
    <Route exact path='/' element={<Feed/>} />
    <Route path='/video/:id' element={<VideoDet/>}/>
    <Route path='/channel/:id' element={<ChannelDet/>}/>
    <Route path='/search/:tosearch' element={<SearchFeed/>}/>
   </Routes>
    </Box>
  </BrowserRouter>
  
  )

export default App
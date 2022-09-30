import React, { useEffect ,useState} from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { FetchApi } from './FetchAPI';


const Feed = () => {


const [selectedCategory, setselectedCategory] = useState('New');
const [videos, setvideos] = useState([]);


useEffect(()=>{
FetchApi(`search?part=snippet&q=${selectedCategory}`)
.then((data)=>setvideos(data.items))
},[selectedCategory])



  return (
    // feed 
    <Stack sx={{
      flexDirection: { sx: 'column', md: 'row' }
    }}>


      <Box sx={{ height: { sx: 'auto', md: '89vh' }, borderRight: '1px solid grey', px: { sx: 0, md: 1.5 } }}>

        <Sidebar selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
         />

        <Typography className='cpr' variant='body2' sx={{ color: 'white' }}>
          Copyright 22  © vidme
        </Typography>
      </Box>

      <Box p={2} sx={{overflow:'auto', flex:2}}>
       <Typography fontWeight="bold" variant='h4' mb={2}
       sx={{
        color:'white'
       }}
       >
        {selectedCategory} <span style={{color:'red' }}> videos </span>
       </Typography>

       <Videos videos={videos}/>
      </Box>
          


    </Stack>
  )
}

export default Feed
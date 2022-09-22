import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    // feed 
    <Stack sx={{
      flexDirection: { sx: 'column', md: 'row' }
    }}>


      <Box sx={{ height: { sx: 'auto', md: '89.4vh' }, borderRight: '1px solid grey', px: { sx: 0, md: 1.5 } }}>

        <Sidebar />
        <Typography className='cpr' variant='body2' sx={{ color: 'white' }}>
          Copyright 22  © vidme
        </Typography>
      </Box>
          


    </Stack>
  )
}

export default Feed
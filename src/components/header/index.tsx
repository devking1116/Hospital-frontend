import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import './header.css';




const Header = () => {
  return(
    <>
      {/* <Box className='header_container' />
      <Box className='header_mian'>
        <Box className='header_menu'>
          <Stack direction='row' spacing={2} alignItems='center'>
            <LocalHospitalIcon sx={{color:'white', fontSize:'50px'}}/>
            <Typography sx={{color:'white', fontSize:'20px', fontWeight:'500'}}>Hospital</Typography>
          </Stack>
          <Box className='menu_list'>
            <Link to='/admin'>Admin</Link>
            <Link to='/'>Register</Link>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}


export default Header;
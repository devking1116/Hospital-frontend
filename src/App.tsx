import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {styled} from '@mui/material/styles';
import Register from "./pages/register";
import Admin from './pages/admin';
import Header from "./components/header";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Box className="wrapper">
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='admin' element={<Admin />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}


export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages imported 
import Home from '../pages/Home';
import Cata from '../pages/Cata';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cata' element={<Cata />} />
    </Routes>
  );
}

export default Router;

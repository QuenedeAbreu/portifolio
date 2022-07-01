import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages imported 
import Home from '../pages/Home';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default Router;

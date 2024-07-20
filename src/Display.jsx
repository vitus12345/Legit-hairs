import React from 'react';
import { Navbar } from './components';
import {BrowserRouter} from 'react-router-dom';

const Display = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Display

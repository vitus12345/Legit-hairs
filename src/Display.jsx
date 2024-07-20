import React from 'react';
import { Navbar, Page } from './components';
import {BrowserRouter} from 'react-router-dom';

const Display = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
      <Page />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Display

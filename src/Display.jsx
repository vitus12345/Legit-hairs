import React from 'react';
import { Navbar, Page, Page2, Page3 } from './components';
import {BrowserRouter} from 'react-router-dom';
import './styles/style.scss';

const Display = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
      <div className="page1">
      <Page />
      </div>
      <div className="page2">
      <Page2 />
      </div>
      <div className="page3">
      <Page3 />
      </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Display

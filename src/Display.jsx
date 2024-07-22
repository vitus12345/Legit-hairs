import React from 'react';
import { Navbar, Page, Page2, Page3 } from './components';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';

const Display = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="page1">
                <Page />
              </div>
            </div>
            <div className="carousel-item">
              <div className="page2">
                <Page2 />
              </div>
            </div>
            <div className="carousel-item">
              <div className="page3">
                <Page3 />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Display;

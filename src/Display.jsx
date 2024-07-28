import React from "react";
import { Navbar, Page, Page2, Page3 } from "./components";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";
import UpdateViewportHeight from "./utils/UpdateViewportHeight"; // Import the component
import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel

const options = {
  items: 1,
  loop: true,
  margin: 3,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
};

const Display = () => {
  return (
    <React.Fragment>
      {/* Update viewport height for mobile devices */}
      <UpdateViewportHeight />
      {/* BrowserRouter is used for routing within the application */}
      <BrowserRouter>
        {/* Navbar component renders the navigation bar */}
        <Navbar />

        {/* Owl Carousel for sliding pages */}
        <OwlCarousel className="owl-theme" {...options}>
          {/* First carousel item, which contains Page component */}
          <div className="page1">
            <Page />
          </div>
          {/* Second carousel item, which contains Page2 component */}
          <div className="page2">
            <Page2 />
          </div>
          {/* Third carousel item, which contains Page3 component */}
          <div className="page3">
            <Page3 />
          </div>
        </OwlCarousel>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Display;

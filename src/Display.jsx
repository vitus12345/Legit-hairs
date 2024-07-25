import React from "react";
import { Navbar, Page, Page2, Page3 } from "./components";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";
import UpdateViewportHeight from "./utils/UpdateViewportHeight"; // Import the component

/**
 * Display Component
 * Renders the main display of the application including the navbar and a carousel with three pages.
 */
const Display = () => {
  return (
    <React.Fragment>
      {/* Update viewport height for mobile devices */}
      <UpdateViewportHeight />
      {/* BrowserRouter is used for routing within the application */}
      <BrowserRouter>
        {/* Navbar component renders the navigation bar */}
        <Navbar />

        {/* Bootstrap carousel for sliding pages */}
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* First carousel item, which contains Page component */}
            <div className="carousel-item active">
              <div className="page1">
                <Page />
              </div>
            </div>
            {/* Second carousel item, which contains Page2 component */}
            <div className="carousel-item">
              <div className="page2">
                <Page2 />
              </div>
            </div>
            {/* Third carousel item, which contains Page3 component */}
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

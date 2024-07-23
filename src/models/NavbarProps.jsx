import React from "react";
import "../styles/navbar.scss";
import { RiMenu2Line } from "react-icons/ri";

// NavbarProps component definition
// Props include: logog, FirstL, SecondL, ThirdL, App, Play
const NavbarProps = ({ logog, FirstL, SecondL, ThirdL, App, Play }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid justify-content-between">
          {/* Logo section */}
          <a className="navbar-brand w-25" href="/">
            <img src={logog} alt="Logo" className="logo-img" />
          </a>

          {/* Navbar toggler button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RiMenu2Line style={{ color: "#fff" }} />
          </button>

          {/* Collapsible navbar content */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            {/* Navbar links */}
            <ul className="navbar-nav m-auto d-flex justify-content-between nav-items-spacing">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#fff", fontWeight: "600" }}
                  aria-current="page"
                  href="/"
                >
                  {FirstL}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#fff", fontWeight: "600" }}
                  href="/"
                >
                  {SecondL}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#fff", fontWeight: "600" }}
                  href="/"
                >
                  {ThirdL}
                </a>
              </li>
            </ul>

            {/* App and Play store icons */}
            <ul className="ml-auto d-flex align-items-center">
              <div className="nav-item">
                <a className="nav-link" href="/">
                  <img src={App} alt="App" className="icon-img" />
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/">
                  <img src={Play} alt="Play" className="icon-img" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarProps;

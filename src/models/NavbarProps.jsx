import React from "react";
import "../styles/style.scss";
import { RiMenu2Line } from "react-icons/ri";


const NavbarProps = ({ logog, FirstL, SecondL, ThirdL, App, Play }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-between ">
          <a className="navbar-brand mr-auto w-25" href="/">
            <img src={logog} alt="Logo" className="w-75" />
          </a>
          <button
            className="navbar-toggler border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><RiMenu2Line /></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav m-auto d-flex w-50 justify-content-between nav-items-spacing">
              <li className="nav-item">
                <a className="nav-link" style={{color: "#fff", fontWeight: "600" }} aria-current="page" href="/">
                  {FirstL}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: "#fff", fontWeight: "600" }} href="/">
                  {SecondL}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: "#fff", fontWeight: "600" }} href="/">
                  {ThirdL}
                </a>
              </li>
            </ul>
            <ul className="ml-auto d-flex mt-2">
              <div className="nav-item">
                <a className="nav-link" href="/">
                  <img src={App} alt="App" className="w-75" />
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/">
                  <img src={Play} alt="Play" className="w-75" />
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

// <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
//   <div className="container-fluid justify-content-between">
//     {/* Left elements */}
//     <div className=" w-25 d-flex align-items-center">
//       <a className="navbar-brand" href="/">
//         <img src={logog} alt="Logo" className="logo-img w-75" />
//       </a>
//     </div>
//     {/* Center elements */}
//     <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">
//             {FirstL}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">
//             {SecondL}
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">
//             {ThirdL}
//           </a>
//         </li>
//       </ul>
//     </div>
//     {/* Right elements */}
//     <div className="nav-item d-flex align-items-center">
//       <a className="nav-link" href="/">
//         <img src={App} alt="App" className="icon-img" />
//       </a>
//       <a className="nav-link" href="/">
//         <img src={Play} alt="Play" className="icon-img" />
//       </a>
//     </div>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//   </div>
// </nav>

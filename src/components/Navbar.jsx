import React from "react";
import { Logo, PlayStore, AppleStore } from "../assets";
import { NavbarProps } from "../models";

const Navbar = () => {
  return (
    <div>
      <NavbarProps logog={Logo} 
      FirstL="Why Legit Hair"
      SecondL="How it works"
      ThirdL="Contact Us"
      Play={PlayStore}
      App={AppleStore}
       />
    </div>
  );
};

export default Navbar;

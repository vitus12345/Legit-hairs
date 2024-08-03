import React from "react"; // Import React
import { Logo } from "../assets"; // Importing assets
import { NavbarProps } from "../models"; // Importing NavbarProps component

// Navbar component definition
const Navbar = () => {
  return (
    <div>
      {/* Rendering NavbarProps with specific props */}
      <NavbarProps
        logog={Logo} // Logo image
        // FirstL="Why Legit Hair" // First link text
        // SecondL="How it works" // Second link text
        ThirdL="Contact Us" // Third link text
      />
    </div>
  );
};

export default Navbar;

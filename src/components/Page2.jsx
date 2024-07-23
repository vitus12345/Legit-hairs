import React from "react"; // Import React
import {
  AppleStore, // Import AppleStore image
  Ellipse, // Import Ellipse image
  Ellipse1, // Import Ellipse1 image
  Ellipse2, // Import Ellipse2 image
  PlayStore, // Import PlayStore image
  Line, // Import Line image
  Vector1, // Import Vector1 image
} from "../assets"; // Import assets from the assets directory
import { Pages } from "../models"; // Import Pages component from the models directory
import "../styles/style.scss"; // Import styles

// Page component definition
const Page = () => {
  return (
    <div>
      {/* Rendering Pages component with specific props */}
      <Pages
        className="pag1" // CSS class for styling
        Heading="Discover New Hair Collection" // Heading text
        lines={Line} // Line image
        Phrase="Fashion is part of the daily air and it changes all the time, with all the events." // Phrase text
        App={AppleStore} // Apple Store image
        Play={PlayStore} // Play Store image
        Dpercent="25" // Discount percentage text
        customer1={Ellipse} // Customer image 1
        customer2={Ellipse1} // Customer image 2
        customer3={Ellipse2} // Customer image 3
        Reviews="15" // Reviews text
        vectors={Vector1} // Vector image
      />
    </div>
  );
};

export default Page;

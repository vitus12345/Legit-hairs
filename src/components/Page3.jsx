import React from "react";
import {
  AppleStore,
  Ellipse,
  Ellipse1,
  Ellipse2,
  Line,
  PlayStore,
  Vector,
} from "../assets";
import { Pages } from "../models";
import "../styles/style.scss";

const Page = () => {
  return (
    <div>
      <Pages
        className="pag2"
        Heading="Discover New Hair Collection"
        lines={Line}
        Phrase="Fashion is part of the daily air and it changes all the time, with all the events."
        App={AppleStore}
        Play={PlayStore}
        Dpercent="25"
        customer1={Ellipse}
        customer2={Ellipse1}
        customer3={Ellipse2}
        Reviews="15"
        vectors={Vector}
      />
    </div>
  );
};

export default Page;

import React from 'react';
import { AppleStore, Ellipse, Ellipse1, Ellipse2, PlayStore, Line } from '../assets';
import { Pages } from '../models';
import "../styles/style.scss";

const Page = () => {
  return (
    <div>
      <Pages 
      className="pag1"
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
      />
    </div>
  )
}

export default Page

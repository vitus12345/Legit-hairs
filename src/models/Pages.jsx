import React from "react";
import { Arrow } from "../assets";
import '../styles/style.scss';

const Pages = ({ className, Heading, Phrase, App, Play, Dpercent, customer1, customer2, customer3, Reviews }) => {
  return (
    <React.Fragment>
      <div className={className}>
        <div className="container">
          <h1>{Heading}</h1>
          <p>{Phrase}</p>
          <div className="imgs">
            <div>
              <img src={Arrow} alt="" />
            </div>
            <div>
              <img src={App} alt="" />
            </div>
            <div>
              <img src={Play} alt="" />
            </div>
          </div>
          <div className="lastf">
            <div className="dpercent">
              <h2>{Dpercent}%</h2>
              <span>Off New Arrivals </span>
            </div>
            <div className="ellisple">
              <div>
                <img src={customer1} alt="" />
              </div>
              <div>
                <img src={customer2} alt="" />
              </div>
              <div>
                <img src={customer3} alt="" />
              </div>
              <div className="review">
                <p>{Reviews}K Well Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pages;

import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import "../styles/style.scss"; // Importing styles

// Pages component definition
const Pages = ({
  className,
  Heading,
  lines,
  Phrase,
  App,
  Play,
  Dpercent,
  customer1,
  customer2,
  customer3,
  Reviews,
  arrivals,
  Arrs,
  WellReviews
}) => {
  return (
    <React.Fragment>
      <div className={className}>
        <div className="container">
          {/* Heading with animation */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Heading}
          </motion.h1>

          {/* Line and phrase with animation */}
          <motion.div
            className="line"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={lines} alt="" className="line-img"/>
            <p className="phrase-text">{Phrase}</p>
          </motion.div>

          {/* Images (Arrow, App, Play) with animation */}
          <motion.div
            className="imgs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="arr">
              <img src={Arrs} alt="" />
            </div>
            <div>
              <img src={Play} alt="" />
            </div>
            <div>
              <img src={App} alt="" />
            </div>
          </motion.div>

          {/* Discount percentage and customer reviews with animation */}
          <motion.div
            className="lastf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Discount percentage */}
            <div className="dpercent">
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {Dpercent}
              </motion.h2>
              <span>{arrivals}</span>
            </div>

            {/* Customer images and reviews */}
            <div className="ellisple">
              <motion.div
                className="image-overlay-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="image-wrapper">
                  <img src={customer1} alt="" />
                </div>
                <div className="image-wrapper">
                  <img src={customer2} alt="" />
                </div>
                <div className="image-wrapper">
                  <img src={customer3} alt="" />
                </div>
              </motion.div>

              {/* Review count */}
              <motion.div
                className="review"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h4>{Reviews}</h4>
                <p>{WellReviews}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pages;

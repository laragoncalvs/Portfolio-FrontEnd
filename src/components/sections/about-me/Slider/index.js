import React, { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import TimeLine from "../TimeLine";
import FlipCard from "../FlipCard";

import infPink from "../../../../assets/Group 5 (2).svg";
import infBlue from "../../../../assets/Group 6 (2).svg";
import teenBlue from "../../../../assets/Group 7 (1).svg";
import teenPink from "../../../../assets/Mask group.svg";
import adPink from "../../../../assets/Group 19.svg";
import adBlue from "../../../../assets/Group 20.svg";
import ButtonBtn from "../../../shared/ButtonBtn";
import AboutCard from "../AboutCard";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: infPink,
    img: infBlue,
  },
  {
    label: "Bird",
    imgPath: teenBlue,
    img: teenPink,
  },
  {
    label: "Bali, Indonesia",
    imgPath: adPink,
    img: adBlue,
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    img: "",
  },
];

function Slider() {
  const [flip, setFlip] = useState(false);

  const flipCard = () => {
    setFlip(!flip);
  };

  const [activeStep, setActiveStep] = React.useState(3);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      setFlip(!flip);
    }, 2500);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleBackAll = () => {
    setActiveStep(0);
    setTimeout(() => {
      setFlip(!flip);
    }, 2500);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {}, []);

  return (
    <div className="about-me-container">

    <div className="about-me">
        

        <SwipeableViews
          style={{height: '626px'}}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          >
          {images.map((step, index) => (
            <div key={step.label}>
              {activeStep === 3 ? (
                <div style={{ height: "100%" }}>
                  <img src={infPink}/>
                </div>
                ) : (
                  <FlipCard
                  img1={step.imgPath}
                  img2={step.img}
                  flipCard={flipCard}
                  flip={flip}
                  />
                  )}
            </div>
          ))}
        </SwipeableViews>
        
          <div className="right-sidebar">
            <AboutCard />

            {activeStep === 3 ? null : (
              <ButtonBtn
              onClick={handleNext}
              btnText="Próximo"
              className="btn-fill"
              />
              )}
            {activeStep === 0 ? null : (
              <ButtonBtn
              className={activeStep === 3 ? "btn-fill" : "btn-outlined ml-15"}
              onClick={activeStep === 3 ? handleBackAll : handleBack}
              btnText={activeStep === 3 ? "Linha do tempo" : "Voltar"}
              />
              )}
          </div>

    </div>
              </div>
  );
}

export default Slider;

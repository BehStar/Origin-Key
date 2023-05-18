import React from "react";
import { useEffect, useState } from "react";
import heroLeft1 from "../../../images/ImgLeftHero/hero-1.jpg";
import heroLeft2 from "../../../images/ImgLeftHero/hero-2.jpg";
import heroLeft3 from "../../../images/ImgLeftHero/hero-3.jpg";

import heroRight1 from "../../../images/ImgRightHero/hero-1.jpg";
import heroRight2 from "../../../images/ImgRightHero/hero-2.jpg";
import heroRight3 from "../../../images/ImgRightHero/hero-3.jpg";

const Hero = () => {
  const listOfImagesLeft = [heroLeft1, heroLeft2, heroLeft3];
  const listOfAltsImagesLeft = ["heroLeft1", "heroLeft2", "heroLeft3"];
  const listOfImagesRight = [heroRight1, heroRight2, heroRight3];
  const listOfAltsImagesRight = ["heroRight1", "heroRight2", "heroRight"];
  const colors = ["beige", "olive", "bisque"];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    let newActiveImageIndex;
    const intervalId = setInterval(() => {
      newActiveImageIndex = activeImageIndex;
      activeImageIndex === 2
        ? (newActiveImageIndex = 0)
        : (newActiveImageIndex = newActiveImageIndex + 1);

      setActiveImageIndex(newActiveImageIndex);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [activeImageIndex]);

  return (
    <div className="hero" style={{ backgroundColor: colors[activeImageIndex] }}>
      <div className="left-hero">
        <img
          src={listOfImagesLeft[activeImageIndex]}
          alt={listOfAltsImagesLeft[activeImageIndex]}
        />
      </div>
      <div className="right-hero">
        <div className="text-right-hero">
          <h1>Simple, pure & authentic goods.</h1>
          <h2>"Let the food be your medicine & your medicine be the food"</h2>
        </div>
        <div className="image-right-hero">
          <img
            className="animate-animated animate-showImage"
            src={listOfImagesRight[activeImageIndex]}
            alt={listOfAltsImagesRight[activeImageIndex]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

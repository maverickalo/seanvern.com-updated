import React from "react";
import background from "../../Content/Images/background.png";
import { ImageContainer } from "./FrontPageImage.style";

const FrontPageImage = props => {
  return (
    <ImageContainer>
      <img src={background} alt="Triangle Square and Circle" />
    </ImageContainer>
  );
};

export default FrontPageImage;

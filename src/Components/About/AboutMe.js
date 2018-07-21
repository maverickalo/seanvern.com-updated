import React from "react";
import aboutimg from "../../Content/Images/aboutimg.png";
import {
  AboutHeadingContainer,
  AboutPicture,
  AboutText,
  Whitespace,
  HeadingContainer,
  AboutTextContainer
} from "./AboutMe.style";

const AboutMe = () => {
  return (
    <div>
      <AboutHeadingContainer>
        <Whitespace />
        <HeadingContainer>
          ABOUT <span>ME</span>
        </HeadingContainer>
      </AboutHeadingContainer>
      <AboutTextContainer>
        <AboutPicture>
          <img src={aboutimg} alt="Sean Vernon" />
        </AboutPicture>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AboutText>
      </AboutTextContainer>
    </div>
  );
};

export default AboutMe;

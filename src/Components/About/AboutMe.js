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
          Living in Portland OR, I have been working with javascript frameworks
          for about 2 years now. I have been working in IT for a little over 8
          years and have my AWS Solutions Architect certification.
          <p>
            In my free time I enjoy riding my bike all around Portland, hiking
            and going to concerts with my beautiful girlfriend Holly.{" "}
          </p>
          <p>
            I love every aspect of coding and the creative side it opens up. It
            has become bordline an obsession.{" "}
          </p>
        </AboutText>
      </AboutTextContainer>
    </div>
  );
};

export default AboutMe;

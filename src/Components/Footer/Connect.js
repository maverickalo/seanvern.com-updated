import React from "react";
import { MenuItem } from "../../Styles/MenuItem";
import { FooterContainer, FooterText } from "./Footer.style";

const Connect = () => {
  return (
    <FooterContainer>
      <h1>
        LETS <span>CONNECT</span>
      </h1>
      <FooterText>
        <ul>
          <MenuItem
            left
            itemText="TWITTER"
            externalLink="https://twitter.com/YogaVern"
          />
          <MenuItem
            left
            itemText="LINKEDIN"
            externalLink="https://www.linkedin.com/in/seanvern/"
          />
          <MenuItem
            left
            itemText="GITHUB"
            externalLink="https://github.com/maverickalo"
          />
          <MenuItem
            left
            itemText="EMAIL"
            externalLink="https://twitter.com/YogaVern"
          />
        </ul>
      </FooterText>
    </FooterContainer>
  );
};

export default Connect;

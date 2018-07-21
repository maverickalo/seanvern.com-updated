import React from "react";
import { FooterContainer, FooterText } from "./Footer.style";
import { MenuItem } from "../../Styles/MenuItem";

const Recent = () => {
  return (
    <FooterContainer>
      <h1>
        RECENT <span>PROJECTS</span>
      </h1>
      <FooterText>
        <ul>
          <MenuItem
            left
            itemText="SIDEKIK"
            externalLink="http://www.sidekikassistant.com/"
          />
          <MenuItem
            left
            itemText="MOUNTAIN FOOTWEAR"
            externalLink="http://www.mountainfootwearidyllwild.com/"
          />
        </ul>
      </FooterText>
    </FooterContainer>
  );
};

export default Recent;

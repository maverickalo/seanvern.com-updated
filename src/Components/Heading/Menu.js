import React from "react";
import { MenuText } from "./Menu.style";
import { MenuItem } from "../../Styles/MenuItem";

const Menu = () => {
  return (
    <MenuText>
      <ul>
        <MenuItem page="/aboutme" right itemText="ABOUT ME" />
        <MenuItem page="/projects" right itemText="PROJECTS" />
        <MenuItem page="/blog" right itemText="BLOG" />
      </ul>
    </MenuText>
  );
};

export default Menu;

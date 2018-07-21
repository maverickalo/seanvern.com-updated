import React from "react";
import { Link } from "react-router-dom";
import { TopList, BottomList } from "./Transitions";

const Logic = ({ page, itemText, right, left, externalLink }) => {
  return externalLink ? (
    <a href={externalLink} target="_blank">
      {left ? <span>|</span> : ""} {itemText} {right ? <span>|</span> : ""}
    </a>
  ) : (
    <Link to={page} style={{ textDecoration: "none", color: "inherit" }}>
      {left ? <span>|</span> : ""} {itemText} {right ? <span>|</span> : ""}
    </Link>
  );
};
export const MenuItem = ({ left, ...props }) => {
  return (
    <div>
      {!left ? (
        <TopList>
          <Logic {...props} left={left} />
        </TopList>
      ) : (
        <BottomList project>
          <Logic {...props} left={left} />
        </BottomList>
      )}
    </div>
  );
};

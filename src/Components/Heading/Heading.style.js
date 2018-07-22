import styled from "styled-components";
import media from "../../Styles/media";

import { fadeIn } from "../../Styles/Transitions";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s linear;

  & h1:first-child {
    margin-top: 2rem;
    color: #d0011b;
  }
  & h1 {
    font-size: 2.5rem;
    margin-left: 2rem;
    ${media.tablet`margin-left: 0;`};
  }
  ${media.tablet`text-align: center; margin-left: 0;`};
`;

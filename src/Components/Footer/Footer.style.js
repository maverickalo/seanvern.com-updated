import styled from "styled-components";
import media from "../../Styles/media";

export const FooterContainer = styled.div`
  width: 50%;
  & h1 {
    font-size: 1.6rem;
    font-weight: 300;
    ${media.tablet`padding-bottom: 1rem;text-align: center; margin-top: 2rem; border-bottom: 1px solid black;margin-bottom: 1rem; font-size: 2rem`};
  }
  & span {
    color: red;
  }
  ${media.tablet`width: 100%`};
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  ${media.tablet`text-align: center; padding: 0; margin: 0`};
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li a {
    color: inherit;
    text-decoration: none;
  }
`;

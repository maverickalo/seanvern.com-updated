import styled from "styled-components";
import media from "../../Styles/media";
export const MenuText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-size: 1rem;
  & ul {
    list-style: none;
  }
  ${media.tablet`padding: 0; margin-bottom: 2rem; margin-top: 1rem`};
`;

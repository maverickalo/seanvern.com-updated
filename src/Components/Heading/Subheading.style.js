import styled from "styled-components";
import media from "../../Styles/media";

export const SubheadingText = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  font-size: 1rem;
  color: #9f9797;
  font-weight: 300;
  letter-spacing: 0.3rem;
  ${media.tablet`justify-content: center; text-align: center; margin-left: 1rem; margin-right: 1rem;`};
`;

import styled from "styled-components";
import { fadeIn } from "../../Styles/Transitions";

export const ImageContainer = styled.div`
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;

  & img {
    animation: ${fadeIn} 0.5s linear;
    max-width: 100%;
    max-height: 60%;
  }
`;

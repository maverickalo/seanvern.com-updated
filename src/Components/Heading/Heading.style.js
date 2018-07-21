import styled from "styled-components";
import { fadeIn } from "../../Styles/Transitions";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 2s linear;
  & h1:first-child {
    margin-top: 2rem;
    color: #d0011b;
  }
  & h1 {
    font-size: 2.5rem;
    margin-left: 2rem;
  }
`;

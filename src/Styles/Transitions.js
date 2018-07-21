import { keyframes } from "styled-components";
import styled from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;
export const TopList = styled.li`
  & span {
    color: #d0011b;
  }

  text-align: right;
  margin-top: 1rem;

  width: 12.5rem;
  letter-spacing: 0.1rem;
  margin-top: 1rem;
  transition: 1s ease;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 1px #d0011b;
    transform: scaleX(0);
    transition: transform 0.6s ease-in-out;
  }
  &:hover:after {
    transform-origin: 100% 100%;
    transform: scaleX(1);
  }
  & span {
    display: inline-block;
    transform: scaleY(1);
    transition: transform 0.3s ease-in-out;
  }
  &:hover span {
    transform-origin: 0% 100%;
    transform: scaleY(0);
  }
`;
export const BottomList = TopList.extend`
  text-align: Left;
  width: 15rem;
  &:hover:after {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
`;

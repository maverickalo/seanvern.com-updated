import styled from "styled-components";
import media from "../../Styles/media";

export const ProjectHeadingContainer = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: flex-end;
  margin-top: 4rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  ${media.phone`margin-top: 2rem; justify-content: center; margin-bottom: 0;`};
`;
export const ProjectHeadingText = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  & span {
    color: red;
  }
`;
export const ProjectContainer = styled.div`
  align-content: center;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 6rem;
    ${media.phone`margin-bottom: 0;`};
  }
`;
export const ExampleBox = styled.div`
  height: 10rem;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-color: #acb6c4;
`;
export const ProjectItem = styled.div`
  width: 15rem;
  margin: 1rem;
  flex-basis: auto;
  text-align: center;
  & h1 {
    padding: 1rem;
    font-weight: 300;
  }
`;

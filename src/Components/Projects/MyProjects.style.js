import styled from "styled-components";
import octocat from "../../Content/Images/octocat.png";
import media from "../../Styles/media";

export const ProjectHeadingContainer = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: flex-end;
  margin-top: 4rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  ${media.tablet`margin-top: 2rem; justify-content: center; margin-bottom: 0;`};
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
  ${media.tablet`justify-content: center;`};

  &:last-child {
    margin-bottom: 6rem;
    ${media.tablet`margin-bottom: 0;`};
  }
`;
export const ExampleBox = styled.div`
  height: 10rem;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-image: url(${octocat});
  background-size: cover;
  margin: 1rem;
`;
export const ProjectItem = styled.div`
  & a {
    color: inherit;
    text-decoration: none;
  }
  width: 15rem;
  margin: 1rem;
  flex-basis: auto;
  text-align: center;
  & p {
    font-size: 1rem;
  }
  & h1 {
    padding: 1rem;
    font-weight: 300;
  }
  transition: 0.5s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
  ${media.tablet`margin-bottom: 5rem;`};
`;

import styled from "styled-components";

export const AboutHeadingContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
export const AboutTextContainer = styled.div`
  display: flex;
  margin-bottom: 6rem;
`;
export const AboutPicture = styled.div`
  width: 50%;

  text-align: center;
  & img {
    max-width: 100%;
    height: 20rem;
  }
`;
export const AboutText = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding-right: 2rem;
  margin-right: 2rem;
  width: 50%;
`;
export const HeadingContainer = styled.div`
  font-size: 2rem;
  font-weight: 300;
  padding: 0.5rem;
  text-align: right;
  margin-right: 2rem;
  border-bottom: 1px solid black;
  width: 50%;
  flex-grow: 1;
  letter-spacing: 0.1rem;
  & span {
    color: red;
  }
`;
export const Whitespace = styled.div`
  flex-grow: 1;
  width: 50%;
`;

import styled from "styled-components";
import media from "../../Styles/media";

export const AboutHeadingContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  ${media.tablet`margin: 0; margin-top: 2rem`};
  ${media.phone`margin: 0`};
`;
export const AboutTextContainer = styled.div`
  display: flex;
  margin-bottom: 6rem;
  ${media.tablet`flex-direction: column; margin-bottom: 2rem`};
  ${media.phone`flex-direction: column; margin-bottom: 2rem`};
`;
export const AboutPicture = styled.div`
  width: 50%;
  ${media.tablet`width: 100%;`};
  ${media.phone`width: 100%;`};
  text-align: center;
  & img {
    max-width: 100%;
    height: 20rem;
    ${media.tablet`height: auto; padding: 2rem`};
    ${media.phone`height: auto; padding: 2rem`};
  }
`;
export const AboutText = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding-right: 2rem;
  margin-right: 2rem;
  width: 50%;
  ${media.tablet`width: calc(100% - 4rem); margin-left: 2rem; margin-right: 2rem; padding: 0`};
  ${media.phone`width: calc(100% - 4rem); margin-left: 2rem; margin-right: 2rem; padding: 0`};
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
  ${media.tablet`text-align: center; width: 100%; margin-left: 2rem`};

  ${media.phone`text-align: center; width: 100%; margin-left: 2rem`};
  & span {
    color: red;
  }
`;
export const Whitespace = styled.div`
  flex-grow: 1;
  width: 50%;
  ${media.tablet`width: 0;`};
  ${media.phone`width: 0;`};
`;

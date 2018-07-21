import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 50%;
  & h1 {
    font-size: 1.6rem;
    font-weight: 300;
  }
  & span {
    color: red;
  }
`;
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

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

import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Components/Heading/Heading";
import MyProjects from "./Components/Projects/MyProjects";
import Subheading from "./Components/Heading/Subheading";
import AboutMe from "./Components/About/AboutMe";
import FrontPageImage from "./Components/FrontImage/FrontPageImage";
import Recent from "./Components/Footer/RecentProjects";
import Connect from "./Components/Footer/Connect";
import Menu from "./Components/Heading/Menu";

class App extends Component {
  render() {
    const TopContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `;
    const Title = styled.div`
      display: flex;
      flex-direction: column;
    `;
    const FooterContainer = styled.div`
      display: flex;
      margin-top: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
      margin-bottom: 2rem;
    `;

    return (
      <div>
        <Route
          path="/"
          render={() => (
            <TopContainer>
              <Title>
                <Heading topHeadingText="SEAN" bottomHeadingText="VERNON" />
                <Subheading />
              </Title>
              <Menu />
            </TopContainer>
          )}
        />
        <Route exact path="/" render={() => <FrontPageImage />} />
        <Route path="/aboutme" render={() => <AboutMe />} />
        <Route path="/projects" render={() => <MyProjects />} />
        <Route
          path="/"
          render={() => (
            <FooterContainer>
              <Connect />
              <Recent />
            </FooterContainer>
          )}
        />
      </div>
    );
  }
}

export default App;

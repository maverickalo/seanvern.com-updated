import React from "react";
import {
  ProjectHeadingContainer,
  ProjectHeadingText,
  ProjectItem,
  ExampleBox,
  ProjectContainer
} from "./MyProjects.style";

const MyProjects = () => {
  return (
    <div>
      <ProjectHeadingContainer>
        <ProjectHeadingText>
          MY <span>PROJECTS</span>
        </ProjectHeadingText>
      </ProjectHeadingContainer>
      <ProjectContainer>
        <ProjectItem>
          <h1>Project 1</h1>
          <ExampleBox />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </ProjectItem>
        <ProjectItem>
          <h1>Project 2</h1>
          <ExampleBox />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </ProjectItem>
        <ProjectItem>
          <h1>Project 3</h1>
          <ExampleBox />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </ProjectItem>
      </ProjectContainer>
    </div>
  );
};

export default MyProjects;

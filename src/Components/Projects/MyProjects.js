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
          <a
            href="https://github.com/maverickalo/maverickalo-uikit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>UI Kit with Custom Docs</h1>
            <ExampleBox />
            <p>
              This was a custom UI Kit I built including a custom set of docs. I
              have it deployed on GH Pages for easier viewing. Link on Github's
              repo.
            </p>
          </a>
        </ProjectItem>
        <ProjectItem>
          <a
            rel="noopener noreferrer"
            href="https://github.com/maverickalo/blog-site"
            target="_blank"
          >
            <h1>Full Stack Blog Site with React and Express</h1>
            <ExampleBox />
            <p>
              This was a full stack blog site I built using express.js. It has
              authentication with passport and OAuth. This is just the Github
              repo.
            </p>
          </a>
        </ProjectItem>
        <ProjectItem>
          <a
            rel="noopener noreferrer"
            href="http://www.sidekikassistant.com"
            target="_blank"
          >
            <h1>Sidekik Website using React</h1>
            <ExampleBox />
            <p>This is a site I am working on for a client in Portland, OR.</p>
          </a>
        </ProjectItem>
      </ProjectContainer>
    </div>
  );
};

export default MyProjects;

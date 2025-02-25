import React from "react";
import Randomizer from "./Randomizer/Randomizer";
import Clock from "./Clock/Clock";
import ToDoApp from "./ToDoApp/ToDoApp";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import SectionIntro from "../../components/SectionIntro";
import Container from "../../components/Container";
import Section from "../../components/Section";

const ProjectTitle = styled.h4`
  margin: 14px 0;
  padding: 14px 0;
  font-family: ${props => props.theme.fontTitles};
`;

const ProjectDescription = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
  color: ${props => props.theme.colorText};
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <SectionIntro>
          <a href="https://github.com/NonVideri">Click here to see my GitHub repository.</a>
        </SectionIntro>
        <ProjectTitle>Randomizer</ProjectTitle>
        <ProjectDescription>
          I love board games. Out of this love was born the Randomizer — an app created to serve as an aid for picking
          random items from a list. Its biggest use is in picking random cards from a list, although you can also use it
          for tasks such as throwing dice. Who needs actual components when you have the Randomizer?
        </ProjectDescription>
        <Randomizer />
        <ProjectTitle>Clock</ProjectTitle>
        <Clock />
        <ProjectTitle>To-Do</ProjectTitle>
        <ToDoApp />
      </Container>
    </Section>
  );
}

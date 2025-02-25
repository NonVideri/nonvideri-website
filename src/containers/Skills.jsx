import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Section from "../components/Section";

const SkillsSection = styled(Section)`
  background-color: ${props => props.theme.colorBoxes};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Column = styled.article`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    flex: 1;
    max-width: calc(33.333% - 2px);

    &:not(:last-child) {
      border-right: 1px solid ${props => props.theme.colorDivider || "#ddd"};
    }
  }
`;

const SkillsList = styled.ul`
  padding: 0 24px;
`;

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <Row>
          <Column>
            <SkillsList>
              <li>Node.js, Express, NestJS</li>
              <li>React, Next.js</li>
              <li>JavaScript (ES6), TypeScript</li>
              <li>HTML5, CSS3, Sass</li>
              <li>Python, Django, DRF</li>
            </SkillsList>
          </Column>
          <Column>
            <SkillsList>
              <li>SQL (PostgreSQL, SQLite)</li>
              <li>Git</li>
              <li>Linux, bash</li>
              <li>DevOps maintenance</li>
              <li>AI-supported programming</li>
            </SkillsList>
          </Column>
          <Column>
            <SkillsList>
              <li>Project team management (15 people)</li>
              <li>PO and UX communication</li>
              <li>Coaching, mentoring</li>
              <li>Public speaking</li>
            </SkillsList>
          </Column>
        </Row>
      </Container>
    </SkillsSection>
  );
}

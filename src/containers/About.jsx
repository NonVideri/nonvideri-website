import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const AboutSection = styled.section`
  background-color: ${props => props.theme.colorBoxes};
  padding: 0;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const AboutImage = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 576px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
    padding-right: 15px;
  }
`;

const AboutText = styled.div`
  margin: 0;
  padding: 50px;
  text-align: justify;
  width: 100%;

  @media (min-width: 576px) {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
`;

export default function About() {
  return (
    <AboutSection id="about">
      <AboutWrapper>
        <AboutImage src="img/KM-webpage.jpg" alt="" />
        <AboutText>
          <SectionTitle>About me</SectionTitle>
          <article>
            <p>
              Since childhood, I have always been fascinated with systems. It started with languages and games, and
              extended to psychology, economics and philosophy. When playing around with a new system, I aim to
              understand it as deeply as possible, then optimize and improve it. I myself am no exception to this rule.
              I love to "upgrade" myself by learning new mindsets and ways of doing things every day.
            </p>
            <p>
              As a programmer, I do my job the same way I do everything else — always aiming for optimization. I like
              learning new technologies. I also strive to deliver the highest quality code, paying special attention to
              details. I may not be the fastest coder, but I am the cleanest. I take pride in the fact, that my code is
              easy to understand, maintain and extend at low cost to the business (and yes, I am interested in business
              topics as well). I don't only code for today, but for tomorrow as well.
            </p>
            <p>
              Take a look at my <a href="https://github.com/nonvideri">GitHub repository</a> for some (mostly
              educational) projects I did.
            </p>
            <p>
              If you took interest in my skills and way of doing things, feel free to <a href="#contact">contact me</a>.
            </p>
          </article>
        </AboutText>
      </AboutWrapper>
    </AboutSection>
  );
}

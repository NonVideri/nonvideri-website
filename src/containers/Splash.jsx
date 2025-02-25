import React from "react";
import styled from "styled-components";

const SplashSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-image: url("https://i.imgur.com/gQO48Eh.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 40%;
  background-attachment: fixed;
  height: 500px;
`;

const PageIntro = styled.div`
  text-align: center;
`;

const MainTitle = styled.h1`
  margin: 0;
  font-weight: normal;
  color: ${props => props.theme.colorMain};
  font-size: 60px;
  font-family: ${props => props.theme.fontTitles};
`;

const MainSubtitle = styled.h2`
  margin: 12px 0 60px 0;
  font-weight: normal;
  color: ${props => props.theme.colorMain};
  font-size: 28px;
  font-variant: small-caps;
  font-weight: bold;
  font-family: ${props => props.theme.fontTitles};
`;

const MainButton = styled.a`
  display: inline-block;
  padding: 18px 24px;
  font-size: 14px;
  margin: 12px 12px 12px 0;
  background-color: ${props => props.theme.colorMain};
  color: ${props => props.theme.colorBackground};
  text-decoration: none;
  transition: all 0.5s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colorBoxes};
    color: ${props => props.theme.colorMain};
    text-decoration: none;
  }
`;

export default function Splash() {
  return (
    <SplashSection>
      <PageIntro>
        <MainTitle>Krzysztof "NonVideri" Moszyński</MainTitle>
        <MainSubtitle>Multitool Software Developer</MainSubtitle>
        <MainButton href="#projects">See my projects</MainButton>
      </PageIntro>
    </SplashSection>
  );
}

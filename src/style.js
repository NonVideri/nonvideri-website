import { createGlobalStyle } from "styled-components";

// Use require for static assets
const KarlaWoff = require("./fonts/Karla.woff");
const KarlaWoff2 = require("./fonts/Karla.woff2");
const SpectralWoff = require("./fonts/Spectral.woff");
const SpectralWoff2 = require("./fonts/Spectral.woff2");

export const theme = {
  colorMain: `hsl(180, 6%, 87%)`,
  colorBackground: `hsl(0, 0%, 0%)`,
  colorBoxes: `hsl(0, 0%, 7%)`,
  colorTitles: `hsl(120, 100%, 20%)`,
  colorTitlesHover: `hsl(120, 100.00%, 35%)`,
  colorMuted: `hsl(0, 0%, 42%)`,
  fontTitles: `"Spectral", serif`,
  fontText: `"Karla", sans-serif`,
  transition: `all 0.5s`
};

export const FontsStyle = createGlobalStyle`
@font-face {
  font-family: 'Karla';
  src: local('Karla'),
  url(${KarlaWoff2}) format('woff2'),
  url(${KarlaWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Spectral';
  src: local('Spectral'),
  url(${SpectralWoff2}) format('woff2'),
  url(${SpectralWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}
`;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
  }
}

html {
  scroll-behavior: smooth;
}

body,
html {
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorMain};
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  height: 100%;
  font-family: ${props => props.theme.fontText};
}

a {
  color: ${props => props.theme.colorTitles};

  &:hover {
    color: ${props => props.theme.colorTitlesHover};
    transition: ${props => props.theme.transition};
  }
}

img {
  object-fit: cover;
  height: auto;
  width: auto;
}

section {
  padding: 60px 0;
  margin: 10px;
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  margin: 12px 12px 16px 0px;
}
`;

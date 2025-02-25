import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { FontsStyle, GlobalStyle, theme } from "./style";

import Navigation from "./containers/Navigation";
import Splash from "./containers/Splash";
import About from "./containers/About";
import Statement from "./containers/Statement";
import Skills from "./containers/Skills";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Projects from "./containers/Projects/Projects";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return (
    <React.StrictMode>
      <FontsStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </React.StrictMode>
  );
}

function AppRoutes() {
  return (
    <>
      <Navigation />
      <Splash />
      <About />
      <Statement />
      <Skills />
      <Gallery />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

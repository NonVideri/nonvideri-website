import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";

const ContactSection = styled.section`
  text-align: center;
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <p>
          Feel free to contact me on <a href="https://www.linkedin.com/in/krzysztof-moszyński-10695290/">LinkedIn</a>.
        </p>
      </Container>
    </ContactSection>
  );
}

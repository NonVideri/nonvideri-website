import React from "react";
import styled from "styled-components";
import Container from "../components/Container";

const PageFooter = styled.footer`
  background-color: ${props => props.theme.colorBoxes};
  font-size: 12px;
  padding: 12px 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

export default function Footer() {
  return (
    <PageFooter>
      <Container>
        <FooterText>© Krzysztof Moszyński</FooterText>
      </Container>
    </PageFooter>
  );
}

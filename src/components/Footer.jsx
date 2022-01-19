import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    text-align: center;
    margin: 1rem 0;
  `;

  return (
    <Footer>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://www.calmohtml.vercel.app/">@calmohtml</a>.
    </Footer>
  );
};

export default Footer;

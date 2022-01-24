import React from "react";
import { FooterContainer } from "../style/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://www.calmohtml.vercel.app/">@calmohtml</a>.
    </FooterContainer>
  );
};

export default Footer;

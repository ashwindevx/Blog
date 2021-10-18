import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Socials>
      <Social href="https://twitter.com/ashwindevx" target="_blank">
        Twitter
      </Social>
      <span style={{ padding: "0 .25em" }}>•</span>
      <Social href="https://github.com/ashwindevx" target="_blank">
        Github
      </Social>
    </Socials>
  );
};

export default Footer;

const Socials = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;

const Social = styled.a`
  text-decoration: underline;
  text-underline-position: under;
  color: var(--green);
  font-weight: var(--med);
  display: inline-block;
  color: #00b2ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #00b2ff 0%, #0085ff 83.94%);
`;

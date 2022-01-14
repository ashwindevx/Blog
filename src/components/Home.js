import React from "react";
import LatestBlog from "./LatestBlog";
import Footer from "./Footer.js";
import styled from "styled-components";

const Home = ({ data, isLoading }) => {
  return (
    <div>
      <MainHead href="https://twitter.com/ashwindevx" target="_blank">
        @ashwindevx
      </MainHead>
      <Intro>Hey, I’m Ashwin Chauhan. From Meerut living in Mohali.</Intro>
      <Question>Why am I writing Blogs?</Question>
      <Para>
        Well, I suck at writing and wanted to improve this underrated skill.
        Also will be fun to put words to explain something instead of just
        learning it myself and forget it lol. So here I am.
      </Para>
      <Question>What are the blogs about?</Question>
      <Para>
        Anything I am learning be it related to Front-End, Design, Productivity
        or Reading, etc.
      </Para>
      <Question>When do the blogs come out?</Question>
      <Para>Weekly Blogs. Every Friday I’ll post a Blog.</Para>
      <Question style={{ marginTop: "2em" }}>Latest Blog👇🏻</Question>
      <LatestBlog data={data} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default Home;

const MainHead = styled.a`
  font-size: var(--head);
  font-weight: var(--semi);
  text-decoration: none;
  cursor: pointer;
  color: #00b2ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #00b2ff 0%, #0085ff 83.94%);
`;

const Intro = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 12px 0 20px 0;
  cursor: default;
`;

const Question = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 0 0 4px 0;
  cursor: default;
`;

const Para = styled.p`
  font-size: var(--para);
  font-weight: var(--reg);
  color: var(--gray);
  margin: 0 0 20px 0;
  cursor: default;
`;

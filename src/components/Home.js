import React from "react";
import LatestBlog from "./LatestBlog";
import styled from "styled-components";

const Home = ({ data }) => {
  return (
    <div>
      <MainHead href="https://twitter.com/ashwindevx" target="_blank">
        @ashwindevx👋🏻
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
      <Para>Weekly Blogs. Every Sunday I’ll post a Blog.</Para>
      <Question>Latest Blog👇🏻</Question>
      <LatestBlog data={data} />
    </div>
  );
};

export default Home;

const MainHead = styled.a`
  font-size: var(--head);
  font-weight: var(--semi);
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
`;

const Intro = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 10px 0 20px 0;
`;

const Question = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 0 0 4px 0;
`;

const Para = styled.p`
  font-size: var(--para);
  font-weight: var(--reg);
  color: var(--gray);
  margin: 0 0 20px 0;
`;

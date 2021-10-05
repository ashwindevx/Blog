import React from "react";
import styled from "styled-components";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LatestBlog = ({ data, isLoading }) => {
  const date = dateFormat(data?.[0]?.dateAdded, "dddd, mmmm dS, yyyy");
  const mainLink = `https://ashwindev.hashnode.dev/${data?.[0]?.slug}`;

  return (
    <Container>
      {isLoading ? (
        <SkeletonTheme color="#171717" highlightColor="#202020">
          <Skeleton style={{ marginBottom: ".75em" }} height={25} />
          <Skeleton count={3} />
        </SkeletonTheme>
      ) : (
        <BlogLink href={mainLink} target="_blank">
          <Heading>{data[0]?.title}</Heading>
          <Brief>{data[0]?.brief}</Brief>
          <p style={{ fontSize: "var(--sm-para)" }}>{date}</p>
        </BlogLink>
      )}
      <Link to="/blogs">
        <MoreBlogLink>
          More Blogs <Arrow>&#8594;</Arrow>
        </MoreBlogLink>
      </Link>
      <Line></Line>
    </Container>
  );
};

export default LatestBlog;

const Container = styled.div`
  margin-top: 1em;
`;

const Heading = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 0 0 4px 0;
  color: var(--green);
`;

const BlogLink = styled.a`
  text-decoration: none;
  color: var(--white);

  &:hover {
    ${Heading} {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

const Brief = styled.p`
  color: var(--gray);
  margin-bottom: 1em;
`;

const Arrow = styled.span`
  transition: all ease-in-out 0.25s;
`;

const MoreBlogLink = styled.p`
  text-decoration: underline;
  text-underline-position: under;
  color: var(--light);
  font-weight: var(--med);
  margin-top: 1em;
  display: inline-block;

  &:hover {
    ${Arrow} {
      padding-left: 0.25em;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 2em 0;
`;

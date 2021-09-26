import React from "react";
import styled from "styled-components";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const LatestBlog = ({ data }) => {
  const date = dateFormat(data[1].dateAdded, "dddd, mmmm dS, yyyy");
  const mainLink = `https://ashwindev.hashnode.dev/${data[1].slug}`;

  return (
    <Container>
      <BlogLink href={mainLink} target="_blank">
        <Heading>{data[1].title}</Heading>
        <Brief>{data[1].brief}</Brief>
        <p style={{ marginBottom: "2em" }}>{date}</p>
      </BlogLink>
      <Link to="/blogs">
        <MoreBlogLink href="#">
          More Blogs <Arrow>&#8594;</Arrow>
        </MoreBlogLink>
      </Link>
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
`;

const BlogLink = styled.a`
  text-decoration: none;
  color: var(--white);

  &:hover {
    ${Heading} {
      text-decoration: underline;
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
  color: var(--light);
  font-weight: var(--med);

  &:hover {
    ${Arrow} {
      padding-left: 0.25em;
    }
  }
`;

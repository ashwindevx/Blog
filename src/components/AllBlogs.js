import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const AllBlogs = ({ data }) => {
  return (
    <div>
      <Link to="/">
        <HomeLink>
          <Arrow>&#8592;</Arrow> Back
        </HomeLink>
      </Link>
      {data.map((blog) => {
        return (
          <BlogLink
            href={`https://ashwindev.hashnode.dev/${blog.slug}`}
            target="_blank"
          >
            <Heading>{blog.title}</Heading>
            <Brief>{blog.brief}</Brief>
            <p>{dateFormat(blog.dateAdded, "dddd, mmmm dS, yyyy")}</p>
            <Line></Line>
          </BlogLink>
        );
      })}
    </div>
  );
};

export default AllBlogs;

const Heading = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 0 0 4px 0;
`;

const Brief = styled.p`
  color: var(--gray);
  margin-bottom: 1em;
`;

const Arrow = styled.span`
  transition: all ease-in-out 0.25s;
`;

const HomeLink = styled.p`
  text-decoration: underline;
  color: var(--light);
  font-weight: var(--med);
  margin-bottom: 2em;

  &:hover {
    ${Arrow} {
      padding-right: 0.25em;
    }
  }
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 1em 0;
`;

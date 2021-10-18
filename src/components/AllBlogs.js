import React from "react";
import Footer from "./Footer.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { v4 as uuidv4 } from "uuid";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AllBlogs = ({ data, isLoading }) => {
  return (
    <div>
      <Link to="/">
        <HomeLink>
          <Arrow>&#8592;</Arrow> Back
        </HomeLink>
      </Link>
      {isLoading ? (
        <div>
          <SkeletonContainer>
            <SkeletonTheme color="#171717" highlightColor="#202020">
              <Skeleton style={{ marginBottom: "1em" }} height={25} />
              <Skeleton count={3} />
            </SkeletonTheme>
          </SkeletonContainer>
          <SkeletonContainer style={{ marginTop: "1em" }}>
            <SkeletonTheme color="#171717" highlightColor="#202020">
              <Skeleton style={{ marginBottom: "1em" }} height={25} />
              <Skeleton count={3} />
            </SkeletonTheme>
          </SkeletonContainer>
          <SkeletonContainer style={{ marginTop: "1em" }}>
            <SkeletonTheme color="#171717" highlightColor="#202020">
              <Skeleton style={{ marginBottom: "1em" }} height={25} />
              <Skeleton count={3} />
            </SkeletonTheme>
          </SkeletonContainer>
        </div>
      ) : (
        data.map((blog) => {
          return (
            <BlogLink
              href={`https://ashwindev.hashnode.dev/${blog.slug}`}
              target="_blank"
              key={uuidv4()}
            >
              <Heading>{blog.title}</Heading>
              <Brief>{blog.brief}</Brief>
              <p style={{ fontSize: "var(--sm-para)" }}>
                {dateFormat(blog.dateAdded, "dddd, mmmm dS, yyyy")}
              </p>
              <Line></Line>
            </BlogLink>
          );
        })
      )}
      <Footer />
    </div>
  );
};

export default AllBlogs;

const Heading = styled.p`
  font-size: var(--para);
  font-weight: var(--med);
  margin: 0 0 4px 0;
  color: #00b2ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #00b2ff 0%, #0085ff 83.94%);
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
  text-underline-position: under;
  color: var(--light);
  font-weight: var(--med);
  margin-bottom: 2em;
  display: inline-block;

  &:hover {
    ${Arrow} {
      padding-right: 0.25em;
    }
  }
`;

const BlogLink = styled.a`
  text-decoration: none;
  text-underline-position: under;
  color: var(--white);

  &:hover {
    ${Heading} {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 1em 0;
`;

const SkeletonContainer = styled.div`
  margin-bottom: 2em;
`;

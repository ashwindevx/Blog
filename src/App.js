import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AllBlogs from "./components/AllBlogs.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = `
      {
        user(username: "ashhwin") {
          publication {
            posts{
              slug
              title
              brief
              dateAdded
            }
          }
        }
      }
    `;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      });
      const ApiResponse = await response.json();
      setData(ApiResponse.data.user.publication.posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <Router>
      <Container className="App">
        <Switch>
          <Route exact path="/">
            <Home data={data} isLoading={isLoading} />
          </Route>
          <Route path="/blogs">
            <AllBlogs data={data} isLoading={isLoading} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
export default App;

const Container = styled.div`
  max-width: 820px;
  margin: 5em auto;
  padding: 0 20px;
`;

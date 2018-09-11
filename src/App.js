import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import MsgControl from "./components/msgControl";
import "./App.css";
import Addline from "./components/addLine.js";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Network Pick Up Lines
        </a>
      </nav>
      <div>
        <MsgControl />
        <Addline />
      </div>
    </div>
  </ApolloProvider>
);

export default App;

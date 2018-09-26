import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Home from "./components/home";
import About from "./components/aboutus";
import Nav from "./components/Nav";
import Login from "./components/login";
import Profile from "./components/profile";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Footer from "./components/footer";
import { GOOGLE } from "././queries.js";
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookie from 'js-cookie';

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Query query={GOOGLE}>
            {(context) => {
              const { loading, error, data } = context
              if (loading) return "Loading...";
              if (error) return `This is the error bro! ${error.message}`;
              console.log(data)
              return (
                <div>
                  <div className="cool" />
                  <Nav auth={data.profile} />
                  <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/howitworks" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/my/profile" render={() => (
                      data.profile ? (<Profile />) : (<Redirect to='/' />)
                    )} />
                  </Switch>
                  <Footer />
                </div>
              )
            }}

          </Query>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
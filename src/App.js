import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ApolloClient from "apollo-boost";
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

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state = {
    test: false
  }

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Query query={GOOGLE}>
            {(context) => {
              const { loading, error, data } = context
              if (loading) return "Loading...";
              if (error) return `This is the error bro! ${error.message}`;
              console.log(data.profile)
              return (
                <div>
                  <div className="cool" />
                  <Nav test={this.state.test} />
                  <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/howitworks" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/my/profile" render={() => (
                      this.state.test ? (<Profile />) : (<Redirect to='/' />)
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
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
import Footer from "./components/footer";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


class App extends Component {
  state = {
    loggedIn: true
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <div className="cool" />
            <Nav loggedIn={this.state.loggedIn} />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/howitworks" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/my/profile" render={() => (
                this.state.loggedIn ? (<Profile />) : (<Redirect to='/' />)
              )} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;

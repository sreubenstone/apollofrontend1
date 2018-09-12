const { BrowserRouter, Switch, Route, Link } = ReactRouterDOM;
import React, { Component } from "react";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/howitworks">How It Works</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/howitworks" component={Howitworks} />
    </Switch>
  </main>
);

const Apptest = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const Howitworks = () => (
  <div>
    <ul>
      <li>Submit a pickup line</li>
      <li>Watch netflix</li>
      <li>Win!</li>
    </ul>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Apptest />
  </BrowserRouter>,
  document.getElementById("root")
);

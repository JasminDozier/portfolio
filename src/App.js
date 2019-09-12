import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <h1>Home Page</h1>
            </div>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <h1>About Page</h1>
            </div>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <h1>Contact Page</h1>
            </div>
          )}
        />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route render={() => <div>Page not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

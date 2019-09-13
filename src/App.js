import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Project from "./components/project/index";
import Blog from "./components/blog/index";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
          <Route path="/blog" component={Blog} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route render={() => <div>Page not found</div>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

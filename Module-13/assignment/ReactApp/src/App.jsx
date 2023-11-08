import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"; // Remove "Switch"
import { Switch, Route } from "react-router"; // Import "Switch" and "Route" from 'react-router'
import Home from "../src/components/Home";
import Service from "../src/components/Service";
import About from "../src/components/About";
import Project from "../src/components/Project";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

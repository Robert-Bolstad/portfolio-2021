import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

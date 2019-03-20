import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

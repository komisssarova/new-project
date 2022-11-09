import React from "react";
import "./App.css";
import "./index.css";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div class="row justify-content-center">
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
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

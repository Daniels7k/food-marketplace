import React from "react";
import {
  ScrollToTop,
  Navbar,
  Hero,
  Services,
  Portfolio,
  Testimonials,
  Products,
  NewsLetter,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;

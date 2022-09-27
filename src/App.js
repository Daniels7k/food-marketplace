import React, { useEffect } from "react";
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

import ScrollReveal from "scrollreveal";


const App = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false
    })
  
    sr.reveal(
      `
      nav,
      #home,
      #services,
      #portfolio,
      #testimonials,
      #products,
      #newsletter,
      .footer
      `, {
        opacity: 0,
        interval: 200,
      }
    )
  })

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

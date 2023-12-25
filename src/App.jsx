import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Skills from "./Page/Skills/Skills";
import Projects from "./Page/Projects/Projects";
import Contact from "./Page/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Education from "./Page/Education/Education";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

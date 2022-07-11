import React from 'react';
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
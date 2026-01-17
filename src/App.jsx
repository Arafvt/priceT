import React from "react";
import Background from "./components/Background/Background.jsx";
import Topbar from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Problem from "./components/Problem/Problem.jsx";
import Solution from "./components/Solution/Solution.jsx";
import Impact from "./components/Impact/Impact.jsx";
import HowItWorks from "./components/How/How.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import FAQ from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Background />

      <Topbar />

      <main>
        <Hero />
        <Problem />
        <hr className="hr" />
        <Solution />
        <hr className="hr" />
        <Impact />
        <hr className="hr" />
        <HowItWorks />
        <hr className="hr" />
        <Pricing />
        <hr className="hr" />
        <Testimonials />
        <hr className="hr" />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
